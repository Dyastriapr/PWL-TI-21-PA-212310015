import moment from "moment";
import React from "react";

export default function ChatBody({ data }) {
  const me = "0419029203";

  // Fungsi untuk menentukan warna berdasarkan sentimen
  const getBubbleStyle = (sentiment) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return { backgroundColor: "blue" };
      case "negative":
        return { backgroundColor: "red" };
      case "neutral":
        return { backgroundColor: "gray" };
      default:
        return { backgroundColor: "#a198a7" };
    }
  };

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
              ...getBubbleStyle(value.sentiment),
              ...(value.sender === me
                ? styleChatItems.chatBubbleSender
                : styleChatItems.chatBubbleReceiver),
            }}
          >
            <div className="d-flex justify-content-between">
              <span className="me-3">
                <span className="d-block text-start">{value.sentiment}</span>
                <span>{value.messages}</span>
              </span>
              {/* <ButtonAction data={value} HandleRemove={HandleRemove} /> */}
            </div>
            <span className="chat-date" style={{ fontSize: "11px" }}>
              {moment(value.date).format("HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const styleChatItems = {
  chatBubbleItems: {
    display: "flex",
    flexDirection: "column",
  },

  chatBubbleSender: {
    textAlign: "right",
    alignSelf: "flex-end",
  },

  chatBubbleReceiver: {
    alignSelf: "flex-start",
  },
};
