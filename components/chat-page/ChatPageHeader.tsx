"use client";
import React from "react";
import { chats } from "@/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ChatPageHeader = ({ chats }: chats) => {
  const params = useParams();
  const id = params.id;
  const chatInfo = chats?.find((chat) => chat.id.toString() == id);

  return (
    <div className="header-container">
      <div className="chat-search-container">
        <div className="chat-page-header-details">
          <div className="chat-page-header-info">
            <Link href="/chatList">
              <i className="arrow-back-outline-icon"></i>
            </Link>
            <Image
              src={chatInfo!.thumbnailUrl}
              alt={chatInfo!.title}
              style={{ borderRadius: "50%", marginRight: "8px" }}
              width={30}
              height={30}
            />
            <span className="chat-page-header-info-title">
              {chatInfo!.title.slice(0, 5)}
            </span>
          </div>
          <div className="chat-page-header-icons">
            <i className="call-icon"></i>
            <i className="video-icon"></i>
            <i className="mobile-hamburger-menu-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPageHeader;
