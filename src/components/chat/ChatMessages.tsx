"use client"

import { useEffect, useRef } from "react"
import type { UIMessage } from "ai"
import { ChatMessage } from "./ChatMessage"
import { ChatLoading } from "./ChatLoading"

interface ChatMessagesProps {
  messages: UIMessage[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isLoading && <ChatLoading />}
      <div ref={bottomRef} />
    </div>
  )
}
