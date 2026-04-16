"use client"

import { useState, FormEvent } from "react"
import { useChat } from "@ai-sdk/react"
import { TextStreamChatTransport } from "ai"
import { ChatHero } from "./ChatHero"
import { ChatMessages } from "./ChatMessages"
import { ChatInput } from "./ChatInput"
import { Navbar } from "@/components/Navbar"

const transport = new TextStreamChatTransport({ api: "/api/chat" })

export function ChatPage() {
  const { messages, sendMessage, status } = useChat({ transport })
  const [input, setInput] = useState("")
  const isLoading = status === "streaming" || status === "submitted"

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input.trim() })
    setInput("")
  }

  const handlePromptClick = (prompt: string) => {
    sendMessage({ text: prompt })
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 max-w-3xl w-full mx-auto pt-16 overflow-hidden">
        {messages.length === 0 ? (
          <ChatHero onPromptClick={handlePromptClick} />
        ) : (
          <ChatMessages messages={messages} isLoading={isLoading} />
        )}
        <ChatInput
          input={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
