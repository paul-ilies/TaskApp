import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { signout } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth);
  const { userInfo } = userProfile;

  return (
    <div className="header">
      <ul>
        <li className="button-link">
          <Link
            to={userInfo ? "/" : "/login"}
            onClick={userInfo ? () => dispatch(signout()) : null}
          >
            {userInfo ? "Sign Out" : "Sign In"}
          </Link>
        </li>
        {!userInfo && (
          <li className="button-link">
            <Link to="/signup">Sign up</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
