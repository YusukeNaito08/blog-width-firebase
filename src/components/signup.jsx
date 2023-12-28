import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Register = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form action="">
        <label htmlFor="emailLabel">メールアドレス</label>
        <input type="text" name="email" id="emailLabel" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="passwordLabel">パスワード</label>
        <input type="password" name="password" id="passwordLabel" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" onClick={Register}>
          登録
        </button>
      </form>
    </div>
  );
};

export default Signup;
