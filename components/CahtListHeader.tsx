import React from "react";
import ChatSearchBar from "./ChatSearchBar";

const CahtListHeader = () => {
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <ChatSearchBar />
      </div>
    </div>
  );
};

export default CahtListHeader;
