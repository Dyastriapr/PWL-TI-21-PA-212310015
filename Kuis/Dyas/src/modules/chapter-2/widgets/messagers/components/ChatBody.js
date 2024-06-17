import React from "react";
import moment from "moment";

export default function ChatBody({ data }) {
  const listData = data;
  const me = "0419029203";

  return (
    <div className="chat-items">
      {data.map((value, index) => (
        <div
          className="chat-item"
          style={styleChatItems.chatBubbleItems}
          key={index}
        >
          <div
            className="chat text-white rounded my-2 p-2"
            style={{
              ...styleChatItems.chatBubble,
              ...(value.from_id === me
                ? styleChatItems.chatBubbleSender
                : styleChatItems.chatBubbleReceiver),
              backgroundColor: getBubbleColor(value.sentiment),
            }}
          >
            <span className="me-3 text-white fw-bold">{value.sentiment}</span>
            <br />
            <span className="me-3">{value.messages}</span>
            <span className="chat-date" style={{ fontSize: "11px" }}>
              {moment(value.date).format("HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const getMessageStyle = (fromId) => {
  if (fromId === "0419029203") {
    return styleChatItems.chatBubbleSender;
  } else {
    return styleChatItems.chatBubbleReceiver;
  }
};

const styleChatItems = {
  chatBubbleItems: {
    display: "flex",
    flexDirection: "column",
  },

  chatBubbleSender: {
    textAlign: "right",
    backgroundColor: "#a198a7",
    alignSelf: "flex-end",
  },

  chatBubbleReceiver: {
    backgroundColor: "#a83aef",
    alignSelf: "flex-start",
  },
};
const getBubbleColor = (sentiment) => {
  switch (sentiment) {
    case "Positif":
      return "#007bff"; // biru untuk sentimen positif
    case "Negatif":
      return "#dc3545"; // merah untuk sentimen negatif
    default:
      return "black"; // abu-abu untuk sentimen netral
  }
};
