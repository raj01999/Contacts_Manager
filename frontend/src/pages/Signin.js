import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Signin = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.elements.log_email.value,
      password: e.target.elements.log_password.value,
    };

    const proRes = await fetch(process.env.REACT_APP_API + "/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await proRes.json();
    if (response.status === "sucess") {
      dispatch({ type: actionType.ADD_USER, payload: { user: response.user } });
      navigate("/contact");
    } else {
      setMsg(response.message);
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    }
  };

  const refreshUser = async () => {
    const jsonData = await fetch(process.env.REACT_APP_API + "/user/signin", {
      method: "GET",
      headers: {
        authorization: state.user.token,
      },
    });

    const data = await jsonData.json();
    if (data.status == "sucess") {
      navigate("/contact");
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <div>
      {msg ? <div>{msg}</div> : ""}
      <form action="" onSubmit={handleSubmit}>
        <div>
          email: <input type="email" id="log_email" required />
        </div>
        <div>
          password:
          <input type="password" id="log_password" required />
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
