import React from "react";
import Image from "next/image";
import Link from "next/link";

interface chat {
  chatProps: {
    albumId: number;
    id: number | string;
    thumbnailUrl: string;
    title: string;
    url: string;
  };
}

const ChatItem = ({ chatProps }: chat) => {
  return (
    <Link href={`/chatList/${chatProps.id}`}>
      <div
        key={chatProps.id}
        id={chatProps.id.toString()}
        className="chat-list"
      >
        <div className="chat-list-item">
          <Image
            src={chatProps.thumbnailUrl}
            alt={chatProps.title}
            style={{ borderRadius: "50%", marginRight: "8px" }}
            width={40}
            height={40}
          />
          <div>
            <div className="chat-list-title">{chatProps.title.slice(0, 6)}</div>
            <div className="chat-list-caption">
              {chatProps.title.slice(0, 20)}
            </div>
          </div>
        </div>
        <div className="chat-list-time">{chatProps.title.slice(0, 5)}</div>
      </div>
    </Link>
  );
};

export default ChatItem;
