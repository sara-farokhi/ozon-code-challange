"use client";
import React from "react";
import { chats } from "@/types";
import { useParams } from "next/navigation";

const ChatPageHeader = ({ chats }: chats) => {
  const params = useParams();
  const id = params.id;
  console.log(typeof id);
  const chatInfo = chats?.find((chat) => chat.id.toString() == id);
  console.log(chatInfo);
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <div>ChatPageHeader</div>
      </div>
    </div>
  );
};

export default ChatPageHeader;
