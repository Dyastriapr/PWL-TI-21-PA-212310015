import React, { useEffect, useMemo, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";
import Sentiment from "sentiment";

export default function MessengersUI({ profile, selectedChat, selectedUser }) {
  const [myChat, setMyChat] = useState(selectedChat);
  const [search, setSearch] = useState([]);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessageRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const HandlerSendChat = (e) => {
    e.preventDefault();

    const objChat = {
      id: 100,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };

    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  const sentiment = new Sentiment();
  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => {
      const result = sentiment.analyze(msg.messages);
      let sentimentLabel = "Netral";
      if (result.score > 0) sentimentLabel = "Positif";
      else if (result.score < 0) sentimentLabel = "Negatif";
      return {
        ...msg,
        sentiment: sentimentLabel,
        date_fmt: moment(msg.date).format("YYYY-MM-DD"),
        isOutgoing: msg.from_id === profile.id,
      };
    });
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }

    return computedData;
  }, [myChat, search, profile.id]);

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

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between flex-row">
        <h5 className="card-title my-auto">
          <span className="fw-bold mb-2" style={{ color: "white" }}>
            Chat
          </span>
        </h5>

        {/* <div className="card-toolbar">
          <ButtonSearch setSearch={setSearch}>
            <span className="svg-icon svg-icon-1 svg-icon-gray-400 me1">
              <i class="bi bi-search"></i>
            </span>
          </ButtonSearch>
        </div> */}
      </div>

      <div className="card-body p-0">
        {ResultMessageData.length > 0 ? (
          <>
            <div
              className="chat-message px-2 bg-light-primary"
              style={styleMessage.chatBox}
            >
              <ChatBody data={ResultMessageData} />
              <div ref={endOfMessageRef}></div>
            </div>

            <div className="chat-send bg-light p-3">
              <form
                method="post"
                autoComplete="off"
                onSubmit={(e) => HandlerSendChat(e)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    autoFocus={true}
                    value={writeChat}
                    onChange={(e) => setWriteChat(e.target.value)}
                  />

                  <ButtonPrimary
                    items={{
                      title: "Create new chat",
                      btn_class: "btn-icon",
                    }}
                  >
                    <i className="bi bi-send"></i>
                  </ButtonPrimary>
                </div>
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

const styleMessage = {
  chatBox: {
    minHeight: "200px",
    maxHeight: "45vh",
    overflowY: "auto",
  },
};
