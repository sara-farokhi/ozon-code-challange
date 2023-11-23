import React from "react";

const CahtListHeader = () => {
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <div className="chat-search-input-container">
          <i className="search-avatar">J</i>
          <input
            className="chat-search-input"
            placeholder="Search by name, number..."
          />
          <i className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default CahtListHeader;
