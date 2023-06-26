import { PropsWithChildren } from "react";
import "./message.css";

const Message = (props: PropsWithChildren) => {
    return <div className="message">{props.children}</div>;
};

export default Message;
