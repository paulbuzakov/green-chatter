import { useState } from "react";

const useChat = (): {
    messages: string[];
    addMessage: (newMessage: string) => void;
} => {
    const [messages, setMessages] = useState<string[]>([]);
    return {
        messages,
        addMessage: (newMessage: string) => {
            setMessages([...messages, newMessage]);
        },
    };
};

export default useChat;
