"use client";
import { useEffect, useState } from "react";
import { fetchChats } from "@/actions/fetch-messages";
import { chat } from "@/types";
import Messages from "./Messages";

export function LoadMoreMessages() {
  const [chats, setChats] = useState<chat[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [display, setDisplay] = useState<string>("none");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        loadMore();
        setDisplay("block");
      }
    };
  }, []);

  const delay = (ms: number) =>
    new Promise((resolve) => {
      setLoading(true);
      setTimeout(resolve, ms);
    });

  const loadMore = async () => {
    await delay(2000);
    const newMessages = (await fetchChats()) ?? [];
    setChats((prevMessages: chat[]) => [...prevMessages, ...newMessages]);
    setLoading(false);
  };

  const windowHeight = document.documentElement.scrollHeight;
  const handelElevator = () => {
    window.scroll({
      top: windowHeight,
      behavior: "smooth",
    });
    setDisplay("none");
  };

  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
      <Messages chats={chats} />
      <div
        className="elevator"
        style={{ display: `${display}` }}
        onClick={() => {
          handelElevator();
        }}
      ></div>
    </>
  );
}
