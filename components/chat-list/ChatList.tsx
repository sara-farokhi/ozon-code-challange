import React from "react";
import Image from "next/image";

interface chat {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const getCalls = async () => {
  const resApi = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });

  if (resApi.ok) {
    const data = await resApi.json();
    return data;
  } else {
    throw new Error("something went wrong");
  }
};

const ChatList = async () => {
  const data: chat[] = await getCalls();
  const chats = data.slice(0, 4);
  return (
    <>
      {chats &&
        chats.map((chat) => (
          <div key={chat.id} id={chat.id.toString()} className="chat-list">
            <div className="chat-list-item">
              <Image
                src={chat.thumbnailUrl}
                alt={chat.title}
                style={{ borderRadius: "50%", marginRight: "8px" }}
                width={40}
                height={40}
              />
              <div>
                <div className="chat-list-title">{chat.title.slice(0, 6)}</div>
                <div className="chat-list-caption">
                  {chat.title.slice(0, 20)}
                </div>
              </div>
            </div>
            <div className="chat-list-time">{chat.title.slice(0, 5)}</div>
          </div>
        ))}
    </>
  );
};

export default ChatList;
