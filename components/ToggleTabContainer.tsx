"use client";
import React from "react";
import ChatList from "@/components/ChatList";
import CallList from "@/components/CallList";
import { usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

const ToggleTabContainer = ({ children }: Props): React.ReactNode => {
  const pathname = usePathname();
  return (
    <div>
      {children}
      {pathname && pathname === "/chatList" ? <ChatList /> : <CallList />}
    </div>
  );
};

export default ToggleTabContainer;
