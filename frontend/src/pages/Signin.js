import "./signin.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import Alert from "../components/Alert";

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
      }, 2500);
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
    if (data.status === "sucess") {
      navigate("/contact");
    }
  };

  useEffect(() => {
    refreshUser();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="loginContainer">
      <div className="bigCircleTop"></div>
      <div className="mainLogIn">
        <div className="dotLeft">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
          <div className="dot dot5"></div>
          <div className="dot dot6"></div>
          <div className="dot dot7"></div>
          <div className="dot dot8"></div>
          <div className="dot dot9"></div>
          <div className="dot dot10"></div>
          <div className="dot dot11"></div>
          <div className="dot dot12"></div>
          <div className="dot dot13"></div>
          <div className="dot dot14"></div>
          <div className="dot dot15"></div>
          <div className="dot dot16"></div>
          <div className="dot dot17"></div>
          <div className="dot dot18"></div>
          <div className="dot dot19"></div>
          <div className="dot dot20"></div>
          <div className="dot dot21"></div>
          <div className="dot dot22"></div>
          <div className="dot dot23"></div>
          <div className="dot dot24"></div>
          <div className="dot dot25"></div>
          <div className="dot dot26"></div>
          <div className="dot dot27"></div>
          <div className="dot dot28"></div>
          <div className="dot dot29"></div>
          <div className="dot dot30"></div>
          <div className="dot dot31"></div>
          <div className="dot dot32"></div>
          <div className="dot dot33"></div>
          <div className="dot dot34"></div>
          <div className="dot dot35"></div>
          <div className="dot dot36"></div>
          <div className="dot dot37"></div>
          <div className="dot dot38"></div>
          <div className="dot dot39"></div>
          <div className="dot dot40"></div>
          <div className="dot dot41"></div>
          <div className="dot dot42"></div>
        </div>
        {msg ? <Alert msg={msg} /> : ""}

        <form action="" className="signForm" onSubmit={handleSubmit}>
          <div className="logo">Logo</div>

          <div className="detail">
            Enter your credentials to access your account
          </div>
          <input type="email" placeholder="User Id" id="log_email" required />
          <input
            type="password"
            placeholder="password"
            id="log_password"
            required
          />
          <button type="submit">Sign In</button>
          <Link to="/signup">Sign up</Link>
        </form>

        <div className="dotRight">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
          <div className="dot dot5"></div>
          <div className="dot dot6"></div>
          <div className="dot dot7"></div>
          <div className="dot dot8"></div>
          <div className="dot dot9"></div>
          <div className="dot dot10"></div>
          <div className="dot dot11"></div>
          <div className="dot dot12"></div>
          <div className="dot dot13"></div>
          <div className="dot dot14"></div>
          <div className="dot dot15"></div>
          <div className="dot dot16"></div>
          <div className="dot dot17"></div>
          <div className="dot dot18"></div>
          <div className="dot dot19"></div>
          <div className="dot dot20"></div>
          <div className="dot dot21"></div>
          <div className="dot dot22"></div>
          <div className="dot dot23"></div>
          <div className="dot dot24"></div>
          <div className="dot dot25"></div>
          <div className="dot dot26"></div>
          <div className="dot dot27"></div>
          <div className="dot dot28"></div>
          <div className="dot dot29"></div>
          <div className="dot dot30"></div>
          <div className="dot dot31"></div>
          <div className="dot dot32"></div>
          <div className="dot dot33"></div>
          <div className="dot dot34"></div>
          <div className="dot dot35"></div>
          <div className="dot dot36"></div>
          <div className="dot dot37"></div>
          <div className="dot dot38"></div>
          <div className="dot dot39"></div>
          <div className="dot dot40"></div>
          <div className="dot dot41"></div>
          <div className="dot dot42"></div>
        </div>
      </div>
      <div className="bigCircleBottom"></div>
    </section>
  );
};

export default Signin;
