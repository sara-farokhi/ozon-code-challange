import ChatSearchBar from "./ChatListSearch";
import ChatTabs from "./ChatTabs";

const ChatListHeader = () => {
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <ChatSearchBar />
        <ChatTabs />
      </div>
    </div>
  );
};

export default ChatListHeader;
