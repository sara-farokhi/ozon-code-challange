import React from "react";
import ChatSearchBar from "./ChatSearchBar";
import ChatTabs from "./ChatTabs";

const CahtListHeader = () => {
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <ChatSearchBar />
        <ChatTabs />
      </div>
    </div>
  );
};

export default CahtListHeader;
