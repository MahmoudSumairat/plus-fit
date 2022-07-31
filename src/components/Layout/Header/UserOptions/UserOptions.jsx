import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bag } from "../../../../svg";
import Dropdown from "../../../core/Dropdown/Dropdown";
import styles from "./userOptions.module.scss";
import { Heart, Logout } from "../../../../svg";
import useIsAuthenticated from "../../../../hooks/useIsAuthenticated";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/actionCreators/auth";

const { userOptions, user, bag } = styles;

const UserOptions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const parentRef = useRef();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserIconClick = () => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  const handleLogout = () => {
    // logout token
    localStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div className={userOptions}>
      <div className={user}>
        <span ref={parentRef} onClick={handleUserIconClick}>
          <User />
        </span>
        <Dropdown
          parentRef={parentRef}
          setShowDropdown={setShowDropdown}
          showDropdown={showDropdown}
          options={[
            { title: "wishlist", linkTo: "/wishlist", icon: Heart },
            { title: "logout", onClick: handleLogout, icon: Logout },
          ]}
        />
      </div>
      <div className={bag}>
        <Bag />
      </div>
    </div>
  );
};

export default UserOptions;
