"use client";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { text: "This is a bot reply.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4 flex flex-col space-y-2">
      <ScrollArea className="h-64 overflow-y-auto p-2 border rounded-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md mb-2 ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </ScrollArea>
      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </Card>
  );
}
