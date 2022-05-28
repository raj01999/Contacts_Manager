import React from "react";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [state, dispatch] = useStateValue();
  return <h1>{state.user.email}</h1>;
};

export default Header;
