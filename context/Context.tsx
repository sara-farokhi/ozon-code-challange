"use client";

import { createContext, useState } from "react";
import { chat } from "@/types";

const add = (a: chat): void => {};

const message: chat = {
  albumId: 1,
  id: 1,
  thumbnailUrl: "",
  title: "",
  url: "",
};
const messages: chat[] = [];
const Context = createContext({ add, message, messages });

export const Provider = ({ children }: any) => {
  const [message, setMessage] = useState<chat>({
    albumId: 1,
    id: 1,
    thumbnailUrl: "",
    title: "",
    url: "",
  });
  const [messages, setMessages] = useState<chat[]>([]);
  const add = (a: chat): void => {
    setMessages([...messages, a]);
  };

  return (
    <Context.Provider value={{ add, message, messages }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
