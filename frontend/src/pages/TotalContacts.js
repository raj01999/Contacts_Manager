import React from "react";
import AllContact from "../components/AllContact";
import Aside from "../components/Aside";
import Header from "../components/Header";

const TotalContacts = () => {
  return (
    <div className="mailContainer">
      <Aside />
      <div className="innerContainer">
        <Header />
        <AllContact />
      </div>
    </div>
  );
};

export default TotalContacts;
