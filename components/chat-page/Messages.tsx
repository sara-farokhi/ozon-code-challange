"use client";
import { useContext } from "react";
import { chats } from "@/types";
import Context from "@/context/Context";

const Messages = ({ chats }: chats) => {
  const { messages } = useContext(Context);

  // this function is to seprate sender from reciever as mock data for ui
  const sendRecieveMockChat = chats!.map((chat, i) => {
    if (i % 3 === 0) {
      return { ...chat, sender: true };
    } else {
      return { ...chat, sender: false };
    }
  });
  return (
    <div className="messages-list">
      <>
        {sendRecieveMockChat ? (
          sendRecieveMockChat.map((chat) => (
            <div
              key={chat.id}
              className={chat.sender ? "message-item sender" : "message-item"}
            >
              <div>{chat.title}</div>
            </div>
          ))
        ) : (
          <div>There is no conversion here lets have some</div>
        )}

        {/* this part is to show add function without api and it is just a mock only for ui */}
        {messages.map((chat) => (
          <div key={chat.id} className="message-item">
            <div>{chat.title}</div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Messages;
