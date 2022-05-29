import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);
  const [wrongPass, setWrongPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.target.elements.reg_password.value !==
      e.target.elements.c_reg_password.value
    ) {
      setTimeout(() => {
        setWrongPass(false);
      }, 5000);
      return setWrongPass(true);
    }
    const data = {
      email: e.target.elements.reg_email.value,
      password: e.target.elements.reg_password.value,
    };

    const proRes = await fetch(process.env.REACT_APP_API + "/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await proRes.json();
    if (response.status === "sucess") {
      navigate("/");
    } else {
      setMsg(response.message);
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    }

    console.log(response);
  };

  return (
    <div>
      {msg ? <div>{msg}</div> : ""}
      {wrongPass ? <div>Password does't match</div> : ""}
      <form action="" onSubmit={handleSubmit}>
        <div>
          email: <input type="email" id="reg_email" required />
        </div>
        <div>
          password:
          <input type="password" id="reg_password" required />
        </div>
        <div>
          confirm password :
          <input type="password" id="c_reg_password" required />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
