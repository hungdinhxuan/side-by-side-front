import React from "react";
import * as ReactDOM from "react-dom";
import { Chat } from "@progress/kendo-react-conversational-ui";

export default function ChatOnline() {
  const MessageTemplate = (props) => {
    return (
      <div className="k-bubble">
        <div>The message text is {props.item.text}</div>
      </div>
    );
  };

  const user = {
    id: 1,
    name: "Jane",
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png",
  };

  const [messages, setMessages] = React.useState([]);

  const addNewMessage = (event) => {
    setMessages([...messages, event.message]);
  };

  return (
    <div>
      <Chat
        user={user}
        messages={messages}
        onMessageSend={addNewMessage}
        width={400}
        messageTemplate={MessageTemplate}
      />
    </div>
  );
}
