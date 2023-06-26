import { useState } from "react";
import "./App.css";
import useChat from "./hooks/useChat";
import { Chat, Message, MessageInput } from "./components";

function App() {
    const chat = useChat();

    return (
        <>
            <Chat>
                {chat.messages.map((text, index) => {
                    return <Message key={index}>{text}</Message>;
                })}
            </Chat>
            <MessageInput onSubmit={chat.addMessage} />
        </>
    );
}

export default App;
