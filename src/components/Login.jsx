import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
      <div>
        <Link to="/signup">新規登録はこちら</Link>
      </div>
    </div>
  );
};

export default Login;
