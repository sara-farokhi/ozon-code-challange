import React from "react";
import { chats } from "@/types";
import Messages from "./Messages";
import { LoadMoreMessages } from "./LoadMoreChats";

const ChatPage = ({ chats }: chats) => {
  return (
    <div>
      <LoadMoreMessages />
      <Messages chats={chats} />
      <div className="chat-page-background"></div>
    </div>
  );
};

export default ChatPage;
