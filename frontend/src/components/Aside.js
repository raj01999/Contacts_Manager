import React from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useNavigate } from "react-router-dom";
import dashbord from "../utils/dashbord.svg";
import totalContact from "../utils/totalContact.svg";
import signOut from "../utils/signOut.svg";

const Aside = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: actionType.REMOVE_USER });
    navigate("/");
  };
  return (
    <aside className="sidebar">
      <div className="sidetop">
        <p className="asidelogo">Logo</p>
        <div>
          <img src={dashbord} alt="dashbord" className="dashbord" />
          <img src={totalContact} alt="totalContact" className="asideOpenimg" />
        </div>
      </div>

      <img
        src={signOut}
        alt="signOut"
        onClick={handleClick}
        className="signOutBtn"
      />
    </aside>
  );
};

export default Aside;
