"use client";
import { createContext, useState } from "react";
import { chat } from "@/types";

const addNewMessage = (a: chat): void => {};
const message: chat = {
  albumId: 1,
  id: 1,
  thumbnailUrl: "",
  title: "",
  url: "",
};
const messages: chat[] = [];
const Context = createContext({ addNewMessage, message, messages });
type Props = {
  children?: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
  const [message, setMessage] = useState<chat>({
    albumId: 1,
    id: 1,
    thumbnailUrl: "",
    title: "",
    url: "",
  });
  const [messages, setMessages] = useState<chat[]>([]);
  const addNewMessage = (a: chat): void => {
    setMessages([...messages, a]);
  };

  return (
    <Context.Provider value={{ addNewMessage, message, messages }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
