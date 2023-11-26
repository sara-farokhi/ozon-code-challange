"use client";
import React from "react";
import { chats } from "@/types";
import { useParams } from "next/navigation";

const ChatPageHeader = ({ chats }: chats) => {
  const params = useParams();
  const id = params.id;
  const chatInfo = chats?.find((chat) => chat.id.toString() == id);

  return (
    <div className="header-container">
      <div className="chat-search-container">
        <div className="chat-page-header-details">
          <div className="chat-page-header-info"></div>
          <div className="chat-page-header-icons"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatPageHeader;
