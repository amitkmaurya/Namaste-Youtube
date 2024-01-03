import React from "react";

const ChatMessage = ({name, message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
          <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
          alt=""
        />
        <div className="flex flex-col ml-2">
        <span className="font-bold">{name}</span>
        <span>{message}</span>
        </div>
        </div>
    )
}

export default ChatMessage;