import React from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useNavigate } from "react-router-dom";

const Aside = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: actionType.REMOVE_USER });
    navigate("/");
  };
  return (
    <aside className="sidebar">
      Aside
      <button onClick={handleClick}>Sign out</button>
    </aside>
  );
};

export default Aside;
