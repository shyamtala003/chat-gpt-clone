import React from "react";
import gptLogo from "../assets/ChatGPTLogo.webp";

const GptResult = ({ result }) => {
  return (
    <>
      <div className="query_container reply">
        <img src={gptLogo} alt="" className="profile_image" />
        <p className="query_text">{result}</p>
      </div>
    </>
  );
};

export default GptResult;
