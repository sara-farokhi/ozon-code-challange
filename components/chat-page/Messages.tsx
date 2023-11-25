"use client";
import React from "react";
import { chats } from "@/types";
import { useContext } from "react";
import Context from "@/context/Context";

const Messages = ({ chats }: chats) => {
  const { messages } = useContext(Context);

  return (
    <div>
      <>
        {chats ? (
          chats.map((chat) => (
            <div key={chat.id}>
              <div>{chat.title}</div>
            </div>
          ))
        ) : (
          <div className="text-xl font-bold">
            There is no conversion here lets have some
          </div>
        )}
        {messages.map((chat) => (
          <div key={chat.id}>
            <div>{chat.title}</div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Messages;
