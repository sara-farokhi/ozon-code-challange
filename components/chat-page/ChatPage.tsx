import React from "react";
import { chats } from "@/types";
import Messages from "./Messages";
import { LoadMoreMessages } from "./LoadMoreChats";

const ChatPage = ({ chats }: chats) => {
  return (
    <>
      <LoadMoreMessages />
      <Messages chats={chats} />
    </>
  );
};

export default ChatPage;
