import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../../chapter-1/widget/messegers/components/ButtonUI";
import { ChatBody } from "../../../chapter-1/widget/messegers/components/ChatBody";
import moment from "moment";

export default function MessegersUI({
  profile,
  selectedChat,
  selectedUser,
  search,
}) {
  const EmptyChat = () => {
    return (
      <div>
        <div className="info text-center">
          <h1>No Conversations</h1>
          <p>You didn't made any conversation yet, please select username</p>
          <span className="badge badge-primary">Start a chat</span>
        </div>
      </div>
    );
  };

  const [myChat, setMyChat] = useState([]);
  const endOfMessagesRef = useRef(null);

  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: profile && profile.id && msg.from_id === profile.id,
    }));
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }
    return computedData;
  }, [myChat, profile, search]);

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  const StylesMessager = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
    },
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [writeChat, setWriteChat] = useState("");
  const HandlerSendChat = (e) => {
    e.preventDefault();
    const objChat = {
      id: 99,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };
    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div
              className="chat-message px-2 h-100"
              style={StylesMessager.chatBox}
            >
              <ChatBody data={ResultMessageData} profile={profile} />
              <div ref={endOfMessagesRef} />
            </div>
            <div className="chat-send bg-light p-3">
              <form
                method="post"
                autoComplete="off"
                onSubmit={(e) => HandlerSendChat(e)}
              >
                ...
              </form>
            </div>
          </>
        ) : (
          <EmptyChat />
        )}
      </div>
    </div>
  );
}
