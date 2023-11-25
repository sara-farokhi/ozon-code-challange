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
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => addVal()}>Click</button>;
    </>
  );
};

export default AddMessage;
