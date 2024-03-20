import React from "react";
import MyBio from "./MyBio";

const Profile = () => {
  const myData = {
    name: "Dyas Tri Apriliansyah ganteng",
    age: 90,
  };
  const ClickMe = ({ children, onClickBtn }) => {
    return (
      <button type="button" onClick={onClickBtn}>
        {children}
      </button>
    );
  };

  const HandlerHitme = () => {
    alert("Anda telah mengetuk saya");
  };

  return (
    <div>
      <div>
        <h1>Biodata:</h1>
        <MyBio {...myData} />
        <ClickMe onClickBtn={HandlerHitme}>KLIK</ClickMe>
      </div>
    </div>
  );
};

export default Profile;
