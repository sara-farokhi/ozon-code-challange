"use client";
import { usePathname } from "next/navigation";
import ChatList from "@/components/chat-list/ChatList";
import CallList from "@/components/call-list/CallList";

type Props = {
  children?: React.ReactNode;
};

// this component is to handel tabs
const ToggleTabContainer = ({ children }: Props): React.ReactNode => {
  const pathname = usePathname();
  return (
    <div>
      {children}
      {(pathname && pathname === "/chatList") || pathname === "/" ? (
        <ChatList />
      ) : (
        <CallList />
      )}
    </div>
  );
};

export default ToggleTabContainer;
