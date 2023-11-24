import ChatListHeader from "@/components/chat-list/ChatListHeader";
import MainContainer from "@/components/ToggleTabContainer";
import React from "react";

const ChatList = () => {
  return (
    <div className="c">
      <MainContainer>
        <ChatListHeader />
      </MainContainer>
    </div>
  );
};

export default ChatList;
