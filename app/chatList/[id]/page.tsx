import { fetchChats } from "@/actions/fetch-messages";
import React from "react";
import ChatPage from "@/components/chat-page/ChatPage";

const Chat = async () => {
  const chats = await fetchChats();
  return (
    <>
      <div>
        <ChatPage chats={chats} />
      </div>
    </>
  );
};

export default Chat;
