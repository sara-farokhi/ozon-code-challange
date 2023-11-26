"use client";
import React from "react";
import { chats } from "@/types";
import { useContext } from "react";
import Context from "@/context/Context";

const Messages = ({ chats }: chats) => {
  const { messages } = useContext(Context);
  const sendRecieveMockChat = chats!.map((chat, i) => {
    if (i % 3 === 0) {
      return { ...chat, sender: true };
    } else {
      return { ...chat, sender: false };
    }
  });
  console.log(sendRecieveMockChat);
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
          <div className="text-xl font-bold">
            There is no conversion here lets have some
          </div>
        )}
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
