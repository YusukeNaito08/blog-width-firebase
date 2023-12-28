import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { auth, provider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNoteSticky, faAsterisk, faFilePen, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/indexpost">
        <FontAwesomeIcon icon={faNoteSticky} />
        記事一覧
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          ログイン
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          ログアウト
        </Link>
      )}
      {isAuth ? <span>{auth.currentUser ? auth.currentUser.email : ""}</span> : ""}
    </nav>
  );
};

export default Navbar;
