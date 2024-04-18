import React, { useState } from "react";
import { Messegers, MyFriend } from "./widget/constantas/DataChat";
import { ContactUI } from "./widget/contacts";
import MessegersUI from "./widget/messagers/MessegersUI";

export function ChapterTwo() {
  const myprofile = { id: "0419029203", name: "Febry" };

  const [selectedUser, setSelectedUser] = useState(0);
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

  return (
    <div className="row p-5">
      <div className="col-md-3">
        {/* (Daftar kontak disini) */}
        {myprofile ? (
          <ContactUI
            my_account={myprofile}
            friends={MyFriend}
            selectedUser={selectedUser}
            HandlerSelectedChat={HandlerSelectedChat}
          />
        ) : (
          ""
        )}
      </div>

      <div className="col-md-9">
        {myprofile ? (
          <MessegersUI
            profile={myprofile}
            selectedUser={selectedUser}
            selectedChat={selectedChat}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
