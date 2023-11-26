"use client";

import { useEffect, useState } from "react";
import { fetchChats } from "@/actions/fetch-messages";
import { chat } from "@/types";

import Messages from "./Messages";

export function LoadMoreMessages() {
  const [chats, setChats] = useState<chat[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [page, setPage] = useState(1);

  const delay = (ms: number) =>
    new Promise((resolve) => {
      setLoading(true);
      setTimeout(resolve, ms);
    });

  const loadMore = async () => {
    // Once the page 8 is reached repeat the process all over again.

    await delay(2000);
    const nextPage = (page % 7) + 1;
    const newMessages = (await fetchChats()) ?? [];
    setChats((prevMessages: chat[]) => [...prevMessages, ...newMessages]);
    setPage(nextPage);
    setLoading(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        loadMore();
      }
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
      <Messages chats={chats} />
    </>
  );
}
