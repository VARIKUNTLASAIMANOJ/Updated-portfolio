"use client";

import { useUI } from "@/context/UIContext";
import { personalInfo, projects, skillCategories } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiChat, HiPaperAirplane, HiX } from "react-icons/hi";

// Knowledge base for the chatbot
const knowledgeBase: Record<string, string> = {
    // About
    "about": `I'm ${personalInfo.name}. ${personalInfo.intro}`,
    "who are you": `I'm ${personalInfo.name}. ${personalInfo.intro}`,
    "tell me about yourself": `I'm ${personalInfo.name}. ${personalInfo.intro}`,
    "introduction": `I'm ${personalInfo.name}. ${personalInfo.intro}`,

    // Skills
    "skills": `I'm proficient in: ${skillCategories.map(cat => cat.skills.slice(0, 3).join(", ")).join("; ")}. Check the Skills section for the complete list!`,
    "tech stack": `My tech stack includes: ${skillCategories.flatMap(cat => cat.skills.slice(0, 2)).join(", ")}. See the Skills section for more!`,
    "what technologies": `I work with ${skillCategories.flatMap(cat => cat.skills.slice(0, 2)).join(", ")} and more. Check out the Skills section!`,
    "programming languages": `I'm skilled in ${skillCategories[0]?.skills.join(", ")}.`,

    // Projects
    "projects": `I've worked on several projects including: ${projects.slice(0, 3).map(p => p.title).join(", ")}. Check out the Projects section for details!`,
    "show projects": `My featured projects include: ${projects.slice(0, 3).map(p => p.title).join(", ")}. Visit the Projects section to see them all!`,
    "what have you built": `I've built ${projects.slice(0, 3).map(p => p.title).join(", ")} and more. Check the Projects section!`,

    // Contact
    "contact": `You can reach me at ${personalInfo.email} or through the contact form on this page.`,
    "email": `My email is ${personalInfo.email}. Feel free to reach out!`,
    "hire": `I'd love to discuss opportunities! Reach me at ${personalInfo.email} or use the contact form.`,

    // Experience
    "experience": `I have experience in AI development, full-stack engineering, and machine learning. Check my projects and skills sections for specifics!`,

    // Default
    "hello": "Hello! I'm here to help you learn more about me. Ask about my skills, projects, or how to get in touch!",
    "hi": "Hi there! Feel free to ask about my work, skills, or how to contact me.",
    "help": "I can tell you about: my background, skills, projects, or contact info. What would you like to know?",
};

const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Check for exact or partial matches
    for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
            return value;
        }
    }

    // Keyword matching
    if (lowerQuery.includes("skill") || lowerQuery.includes("know") || lowerQuery.includes("technology") || lowerQuery.includes("tech")) {
        return knowledgeBase["skills"];
    }
    if (lowerQuery.includes("project") || lowerQuery.includes("work") || lowerQuery.includes("built") || lowerQuery.includes("portfolio")) {
        return knowledgeBase["projects"];
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach") || lowerQuery.includes("hire")) {
        return knowledgeBase["contact"];
    }
    if (lowerQuery.includes("about") || lowerQuery.includes("who") || lowerQuery.includes("yourself") || lowerQuery.includes("you")) {
        return knowledgeBase["about"];
    }

    return "I'm not sure about that. Try asking about my skills, projects, or how to contact me!";
};

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

const Chatbot = () => {
    const { isChatOpen, setChatOpen } = useUI();
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm here to help recruiters learn about me. Feel free to ask anything!", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: input,
            isBot: false,
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");

        // Simulate typing delay
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                text: findAnswer(input),
                isBot: true,
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setChatOpen(!isChatOpen)}
                className="chatbot-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open chat"
            >
                {isChatOpen ? <HiX className="w-6 h-6" /> : <HiChat className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="chatbot-window flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-[var(--border)]">
                            <h3 className="font-semibold text-[var(--text-primary)]">Ask me anything</h3>
                            <p className="text-sm text-[var(--text-muted)]">Quick answers about my work</p>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${msg.isBot
                                            ? "bg-[var(--bg-tertiary)] text-[var(--text-primary)]"
                                            : "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[var(--border)]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type a question..."
                                    className="form-input flex-1 py-2 text-sm"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="px-3 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-md disabled:opacity-50 transition-opacity"
                                >
                                    <HiPaperAirplane className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {["Skills", "Projects", "Contact"].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => setInput(suggestion)}
                                        className="text-xs px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded hover:text-[var(--text-primary)] transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
