import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }

    console.log(response);
  };

  return (
    <div>
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
