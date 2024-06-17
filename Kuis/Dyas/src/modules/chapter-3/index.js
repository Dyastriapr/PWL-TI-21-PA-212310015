import React, { useEffect, useState } from "react";
import { ContactUI } from "./widgets/contacts";
import { Messegers, MyFriend } from "./widgets/constantas/DataChat";
import MessengersUI from "../chapter-3/widgets/messagers/MessegersUI";
import axios from "axios";

export function ChapterThree() {
  const myprofile = { id: "0419029203", name: "Febry" };

  const [selectedUser, setSelectedUser] = useState({});
  const [selectedChat, setSelectedChat] = useState([]);

  const HandlerSelectedChat = (data) => {
    setSelectedUser(data);
    const the_msg = [...Messegers];
    const findChatByUserID = the_msg.find(
      (item) => item.user_id === data.user_id
    );
    if (findChatByUserID) {
      setSelectedChat(findChatByUserID.messages);
    } else {
      setSelectedChat([]);
    }
  };

  const [myFriends, setMyFriends] = useState({
    loading: false,
    data: [],
    messages: "",
  });

  useEffect(() => {
    FECTH_CONTACT_CHAT();
  }, []);

  const FECTH_CONTACT_CHAT = () => {
    setMyFriends({ loading: true, data: [], message: "" });
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3003/api/user/fetch-all",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const result = response.data.data;
        if (result) {
          setMyFriends({ loading: false, data: result, message: "" });
        } else {
          setMyFriends({
            loading: false,
            data: [],
            message:
              "Unable to establish a connection to the server. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="chapter-3">
      <h1 className="text-white bg-primary rounded-2 p-3 mb-5">
        Chapter three: Sentimental
      </h1>
      <div className="px-3">
        <div className="row">
          <div className="col-2 col-lg-3 col-xxl-4 px-0">
            {myFriends.loading ? (
              <div>loading</div>
            ) : myFriends.messages ? (
              <div>{myFriends.messages}</div>
            ) : Object.values(myFriends.data).length > 0 ? (
              <ContactUI
                my_account={myprofile}
                friends={myFriends.data}
                selectedUser={selectedUser}
                HandlerSelectedChat={HandlerSelectedChat}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-10 col-lg-9 col-xxl-8 px-0">
            {/* (Messeging disini) */}
            {myprofile ? (
              <MessengersUI
                profile={myprofile}
                selectedUser={selectedUser}
                selectedChat={selectedChat}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
