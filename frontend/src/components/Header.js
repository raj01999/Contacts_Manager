import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [key, setKey] = useState();
  const handleChange = (e) => {
    setKey(e.target.value);
    dispatch({ type: actionType.SEARCH, payload: { key: e.target.value } });
  };

  return (
    <header>
      <ul className="header-ul">
        <li className="mainHead">Totoal Contact</li>
        <li>
          <input
            type="search"
            placeholder="Search"
            value={key}
            className="searchBox"
            onChange={handleChange}
          />
        </li>
        <li>{state.user.email}</li>
      </ul>
    </header>
  );
};

export default Header;
