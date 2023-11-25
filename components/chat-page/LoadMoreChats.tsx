"use client";

import { useEffect, useState } from "react";
import { fetchChats } from "@/actions/fetch-messages";
import { chat } from "@/types";

import Messages from "./Messages";

export function LoadMoreMessages() {
  const [chats, setChats] = useState<chat[]>([]);
  const [page, setPage] = useState(1);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMore = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(2000);
    const nextPage = (page % 7) + 1;
    const newMessages = (await fetchChats()) ?? [];
    setChats((prevMessages: chat[]) => [...prevMessages, ...newMessages]);
    setPage(nextPage);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        setTimeout(() => {
          window.scrollBy(0, 1000);
        }, 2000);
        loadMore();
      }
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
        <h1>Loading....</h1>
      </div>
      <Messages chats={chats} />
    </>
  );
}
