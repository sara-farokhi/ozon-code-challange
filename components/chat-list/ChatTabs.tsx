"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ChatTabs = () => {
  const pathname = usePathname();
  return (
    <ul className="chat-tabs">
      <li className="tab-item">
        <Link
          href="/chatList"
          className={
            pathname == "/chatList" || pathname == "/"
              ? "tab-item active"
              : "tab-item"
          }
        >
          Chats
        </Link>
      </li>
      <li>
        <Link
          href="/callList"
          className={pathname == "/callList" ? "tab-item active" : "tab-item"}
        >
          Calls
        </Link>
      </li>
    </ul>
  );
};

export default ChatTabs;
