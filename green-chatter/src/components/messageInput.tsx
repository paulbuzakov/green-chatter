import { FC, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import "./messageInput.css";

interface IMessageInputProps {
    onSubmit: (text: string) => void;
}

const MessageInput: FC<IMessageInputProps> = (props) => {
    const refInput = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: divElement } = refInput;
        if (divElement) {
            divElement.focus();
        }
    }, [refInput]);

    const onKeyDown: KeyboardEventHandler = (e) => {
        if (e.key !== "Enter") {
            return;
        }

        const { current: divElement } = refInput;
        if (divElement) {
            props.onSubmit(divElement.innerText);
            divElement.focus();
            divElement.innerText = "";
        }
    };

    return (
        <div
            className="message-input"
            ref={refInput}
            spellCheck={false}
            contentEditable
            onKeyDown={onKeyDown}
        />
    );
};

export default MessageInput;
