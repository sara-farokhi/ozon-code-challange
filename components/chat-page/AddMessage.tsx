"use client";
import { useState, useContext } from "react";
import Context from "@/context/Context";

const AddMessage = () => {
  const [message, setMessage] = useState("");
  const { addNewMessage } = useContext(Context);
  const addMessageValue = () => {
    const newMessage = {
      albumId: 1,
      id: 1,
      thumbnailUrl: "",
      title: message,
      url: "",
    };
    addNewMessage(newMessage);
    setMessage("");
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="add-new-message-icon-wrapper">
            <i className="attachment-icon" />
            <i className="camera-icon" />
          </div>
        </div>

        <div className="send-message-btn" onClick={() => addMessageValue()}>
          <i className="send-icon" />
        </div>
      </div>
    </>
  );
};

export default AddMessage;
