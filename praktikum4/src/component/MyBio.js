import React from "react";

const MyBio = (props) => {
  return (
    <div>
      <h1 className="text-danger">Nama Saya : {props.name}</h1>
      <h1 className="text-primary">Umur Saya : {props.age}</h1>
    </div>
  );
};

export default MyBio;
