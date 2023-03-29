import React, { useState } from "react";
import HistoryTitle from "./HistoryTitle";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header>
        <button
          className="menu_toggler_button"
          onClick={() => {
            setOpenSidebar(true);
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <p className="headder_title">New Chat</p>
        <ion-icon name="add-outline"></ion-icon>
      </header>

      <nav className={`navbar ${openSidebar ? "navbar_open" : ""}`}>
        <div className="nav">
          <button id="new_chat">
            <ion-icon name="add-outline"></ion-icon> New chat
          </button>
          <div className="chat_history">
            <HistoryTitle title="shyam tala"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
            <HistoryTitle title="what is async await in javascript"></HistoryTitle>
          </div>
          <div className="user_links"></div>
        </div>
        <div
          className="side_close"
          onClick={() => {
            setOpenSidebar(false);
          }}
        >
          <ion-icon
            name="close-outline"
            onClick={() => {
              setOpenSidebar(false);
            }}
            id="close_menu_button"
          ></ion-icon>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
