import React from "react";
import { chats } from "@/types";
import Messages from "./Messages";
import { LoadMoreMessages } from "./LoadMoreChats";
import ChatPageHeader from "@/components/chat-page/ChatPageHeader";

const ChatPage = ({ chats }: chats) => {
  return (
    <div>
      <ChatPageHeader chats={chats} />
      <LoadMoreMessages />
      <Messages chats={chats} />
      <div className="chat-page-background"></div>
    </div>
  );
};

export default ChatPage;
