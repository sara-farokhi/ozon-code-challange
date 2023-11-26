import React from "react";
import ChatItem from "./ChatItem";
import Footer from "../footer/Footer";
import AddNewChat from "./AddNewChat";
import { chat } from "@/types";

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

  let ELevator = data.map((x, i) => {
    if (i % 3 === 0) {
      return { ...x, sender: true };
    } else {
      return {
        ...x,
        sender: false,
      };
    }
  });

  const chats = data.slice(0, 4);
  return (
    <>
      <div className="main-container">
        {chats && chats.map((chat) => <ChatItem chatProps={chat} />)}
        <AddNewChat />
      </div>
      <Footer />
    </>
  );
};

export default ChatList;
