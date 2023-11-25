import ChatPageHeader from "@/components/chat-page/ChatPageHeader";
import { fetchChats } from "@/actions/fetch-messages";
import React from "react";
import ChatPage from "@/components/chat-page/ChatPage";
import AddMessage from "@/components/chat-page/AddMessage";

const Chat = async () => {
  const chats = await fetchChats();
  return (
    <div>
      <ChatPageHeader />
      <ChatPage chats={chats} />
      <AddMessage />
    </div>
  );
};

export default Chat;
