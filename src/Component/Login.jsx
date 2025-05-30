import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  const auth=localStorage.getItem('user');
    useEffect(()=>
    {
        if(auth)
        {
            navigate('/');
        }
        else{
            navigate('/login');
        }

    },[])

  const handleLogin = async () => {
    console.log({ email, password });

    let result = await fetch("http://localhost:7000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/');
    } else {
      alert("please enter correct details!!");
    }
  };
  return (
    <div className="inputbox">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        className="inputbox"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      ></input>
      <input
        type="text"
        value={password}
        className="inputbox"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      ></input>

      <button onClick={handleLogin} className="SignUpbtn">
        Login
      </button>
    </div>
  );
};

export default Login;
