import { PropsWithChildren } from "react";
import "./char.css";

const Chat = (props: PropsWithChildren) => {
    return <div className="chat">{props.children}</div>;
};

export default Chat;
