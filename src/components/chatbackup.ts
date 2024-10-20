'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Message, QuickReply } from '@/types';
import QuickReplies from './QuickReplies';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ResourcesList from './ResourcesList';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your H1B Career Advisor. How can I assist you today?", sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickReplies: QuickReply[] = [
    { id: 1, text: "H1B visa requirements" },
    { id: 2, text: "Job search strategies" },
    { id: 3, text: "Resume tips" },
    { id: 4, text: "Interview preparation" },
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (text.trim() === '') return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user'
    };

    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setIsTyping(true);

    try {
      const response = await axios.post('/api/chat', { message: text });
      const aiResponse: Message = {
        id: messages.length + 2,
        text: response.data.text, // Assuming the API returns the response in a 'text' field
        sender: 'ai'
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error fetching response from API:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble responding right now. Please try again later.",
        sender: 'ai'
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl h-full flex flex-col">
      <Link href="/control-panel" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <Card className="flex-1 flex flex-col bg-white shadow-lg border-purple-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Chat with Your H1B Career Advisor</CardTitle>
          <CardDescription>Ask me anything about H1B visas, job search strategies, or career advice!</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="flex-1 flex flex-col">
              <MessageList messages={messages} isTyping={isTyping} scrollAreaRef={scrollAreaRef} />
              <QuickReplies quickReplies={quickReplies} onQuickReplyClick={handleSendMessage} />
              <MessageInput onSendMessage={handleSendMessage} />
            </TabsContent>
            <TabsContent value="resources">
              <ResourcesList />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
