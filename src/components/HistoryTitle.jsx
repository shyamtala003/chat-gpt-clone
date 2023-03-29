import React from "react";

const HistoryTitle = ({ title }) => {
  return (
    <p className="chat_link">
      <ion-icon name="chatbox-outline"></ion-icon>
      <span>{title}</span>
    </p>
  );
};

export default HistoryTitle;
