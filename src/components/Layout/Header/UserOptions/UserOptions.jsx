import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Bag } from "../../../../svg";
import Dropdown from "../../../core/Dropdown/Dropdown";
import styles from "./userOptions.module.scss";
import { Heart, Logout } from "../../../../svg";
import useIsAuthenticated from "../../../../hooks/useIsAuthenticated";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/actionCreators/auth";

const { userOptions, user, bag, userOptionsDropdown, bagCount } = styles;

const UserOptions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const parentRef = useRef();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bagItemsCount } = useSelector((state) => state.bag);

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
          className={userOptionsDropdown}
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
        {!!bagItemsCount && <span className={bagCount}>{bagItemsCount}</span>}
        <Link to="/bag">
          <Bag />
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
