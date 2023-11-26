import ChatListHeader from "@/components/chat-list/ChatListHeader";
import ToggleTabContainer from "@/components/ToggleTabContainer";
import React from "react";

const callList = () => {
  return (
    <div>
      <ToggleTabContainer>
        <ChatListHeader />
      </ToggleTabContainer>
    </div>
  );
};

export default callList;
