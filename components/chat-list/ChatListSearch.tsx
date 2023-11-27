const ChatSearchBar = () => {
  return (
    <div className="chat-search-input-container">
      <i className="search-avatar">J</i>
      <input
        className="chat-search-input"
        placeholder="Search by name, number..."
      />
      <i className="search-icon" />
    </div>
  );
};

export default ChatSearchBar;
