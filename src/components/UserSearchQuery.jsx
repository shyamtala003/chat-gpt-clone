import React from "react";
import userImage from "../assets/mypic.png";

export const UserSearchQuery = ({ query }) => {
  return (
    <>
      <div className="query_container">
        <img src={userImage} alt="" className="profile_image" />
        <p className="query_text">{query}</p>
      </div>
    </>
  );
};
