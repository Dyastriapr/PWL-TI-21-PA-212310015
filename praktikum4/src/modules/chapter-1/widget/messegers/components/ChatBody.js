import React from "react";
import moment from "moment";

const ChatBubleItem = ({ data, isSender }) => {
  const chatBubleStyle = {
    backgroundColor: isSender ? "#a198a7" : "blueviolet",
    alignSelf: isSender ? "flex-end" : "flex-start",
    display: "inline-block",
  };
  return (
    <div style={{ textAlign: isSender ? "right" : "left" }}>
      <div className="chat text-white rounded my-2 p-2" style={chatBubleStyle}>
        <span className="me-3">{data.message}</span>
        <span className="chat-date" style={{ fontSize: "11px" }}>
          {moment(data.date).format("HH:mm")}
        </span>
      </div>
    </div>
  );
};

export const ChatBody = ({ data }) => {
  const listdata = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  let nowDisplayed = false;
  let lastDateDisplayed = null;
  const itsme = "Febry";

  return (
    <div className="chat-items p-3">
      {listdata.map((v, index) => {
        const displayDate =
          !lastDateDisplayed ||
          moment(v.date).format("YYYY-MM-DD") !== lastDateDisplayed;
        lastDateDisplayed = moment(v.date).format("YYYY-MM-DD");

        let showNow = false;
        if (!nowDisplayed && moment(v.date).isSame(new Date(), "day")) {
          nowDisplayed = true;
          showNow = true;
        }

        return (
          <div className="chat-item" key={index}>
            {displayDate && (
              <div
                className="chat-date-container"
                style={{
                  width: "150px",
                  margin: "auto",
                  textAlign: "center",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                <span
                  className="chat-date"
                  style={{
                    fontSize: "13px",
                    color: "grey",
                    fontStyle: "italic",
                    fontFamily: "Open Sans",
                  }}
                >
                  {showNow
                    ? "Today"
                    : moment(v.date).format("DD - MMMM - YYYY")}
                </span>
              </div>
            )}
            {/* Gunakan komponen ChatBubleItem */}
            <ChatBubleItem data={v} isSender={v.from === itsme} />
          </div>
        );
      })}
    </div>
  );
};
