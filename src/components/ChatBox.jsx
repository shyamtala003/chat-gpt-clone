import React, { useState } from "react";
import GptResult from "./GptResult";
import UserSearchQuery from "./UserSearchQuery";

const ChatBox = () => {
  let [searchValue, setSearchValue] = useState("");

  return (
    <>
      <section className="chat_container">
        {/* conversation display */}
        <section className="conversation_container">
          <UserSearchQuery query="what is promises in javascript?"></UserSearchQuery>
          <GptResult
            result=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
          facere modi accusamus tempore asperiores cumque qui sed id ipsam harum
          minus unde ea? Cum placeat ut similique, dolor eaque, possimus, harum
          id quam nobis iste assumenda exercitationem. Dolorem veniam deserunt
          molestias voluptas! Perspiciatis possimus in laudantium tempora
          impedit stiae minus alias voluptas necessitatibus libero et nesciunt
          expedita placeat quo reprehenderit cumque sunt! Maiores quae rem
          magni!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
          impedit stiae minus alias voluptas necessitatibus libero et nesciunt
          expedita placeat quo reprehenderit cumque sunt! Maiores quae rem
          magni!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
          impedit stiae minus alias voluptas necessitatibus libero et nesciunt
          expedita placeat quo reprehenderit cumque sunt! Maiores quae rem
          magni!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
          impedit stiae minus alias voluptas necessitatibus libero et nesciunt
          expedita placeat quo reprehenderit cumque sunt! Maiores quae rem
          magni!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
          impedit stiae minus alias voluptas necessitatibus libero et nesciunt
          expedita placeat quo reprehenderit cumque sunt! Maiores quae rem
          magni!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quis exercitationem, placeat ducimus consequuntur animi corporis
          error. Provident porro eveniet quos dolorem vel tenetur, dolorum
         "
          ></GptResult>
        </section>

        {/* element for getting value from user */}
        <div className="bottom_chat_section">
          <div className="chat_input_form">
            <input
              type="text"
              onChange={(e) => {
                setSearchValue(e.currentTarget.value);
              }}
              value={searchValue}
              placeholder="Search Here"
              className="chat_input"
            />
            <button className="chat_send">
              <ion-icon name="navigate-outline" id="send"></ion-icon>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatBox;
