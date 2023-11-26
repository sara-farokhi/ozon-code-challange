"use client";
import React from "react";
import { useState } from "react";
import Context from "@/context/Context";
import { useContext } from "react";

const AddMessage = () => {
  const [val, setVal] = useState("");

  const { add } = useContext(Context);
  const addVal = () => {
    const newMessage = {
      albumId: 1,
      id: 1,
      thumbnailUrl: "",
      title: val,
      url: "",
    };

    add(newMessage);
  };

  return (
    <>
      <div style={{ position: "relative", height: "50px" }}></div>
      <div className="add-new-message-wrapper">
        <div className="add-new-message-container">
          <i className="smile-emo-icon" />
          <input
            type="text"
            className="chat-search-input"
            placeholder="Message"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <div className="add-new-message-icon-wrapper">
            <i className="attachment-icon" />
            <i className="camera-icon" />
          </div>
        </div>

        <div className="send-message-btn" onClick={() => addVal()}>
          <i className="send-icon" />
        </div>
      </div>
    </>
  );
};

export default AddMessage;
