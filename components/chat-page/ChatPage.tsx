import { chats } from "@/types";
import Messages from "./Messages";
import { LoadMoreMessages } from "./LoadMoreChats";
import ChatPageHeader from "@/components/chat-page/ChatPageHeader";
import AddMessage from "@/components/chat-page/AddMessage";

const ChatPage = ({ chats }: chats) => {
  return (
    <>
      <ChatPageHeader chats={chats} />
      <div className="main-container">
        <LoadMoreMessages />
        <Messages chats={chats} />

        <div className="chat-page-background"></div>
      </div>
      <AddMessage />
    </>
  );
};

export default ChatPage;
