import { createGroq } from "@ai-sdk/groq"
import { streamText, convertToModelMessages } from "ai"
import type { UIMessage } from "ai"
import { NextRequest } from "next/server"
import { buildSystemPrompt } from "@/lib/system-prompt"
import { isRateLimited } from "@/lib/rate-limit"

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

function getTextFromUIMessage(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anonymous"

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  let body: { messages?: unknown }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { messages } = body

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Invalid messages format." }, { status: 400 })
  }

  // Validate last message length
  const lastMessage = messages[messages.length - 1] as UIMessage
  const lastMessageText = getTextFromUIMessage(lastMessage)
  if (lastMessageText.length > 500) {
    return Response.json(
      { error: "Message too long. Please keep it under 500 characters." },
      { status: 413 }
    )
  }

  // Convert UIMessages to ModelMessages and window to last 6
  const recentUIMessages = (messages as UIMessage[]).slice(-6)
  const recentMessages = await convertToModelMessages(recentUIMessages)

  try {
    const result = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: buildSystemPrompt(),
      messages: recentMessages,
      temperature: 0.7,
      maxOutputTokens: 800,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    )
  }
}
