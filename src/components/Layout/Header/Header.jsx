import React from "react";
import Logo from "../../Logo/Logo";
import UserOptions from "./UserOptions/UserOptions";
import styles from "./header.module.scss";
import Nav from "../../Nav/Nav";
import { Link, useLocation } from "react-router-dom";
import useHideLayoutComponents from "../../../hooks/useHideLayoutComponents";

const {
  header,
  headerLogo,
  headerNav,
  headerUserOptions,
  darkHeader,
  lightHeader,
} = styles;

const Header = () => {
  const hideLayoutComponents = useHideLayoutComponents();
  const location = useLocation();

  if (hideLayoutComponents) {
    return null;
  }

  const headerTheme = location.pathname === "/" ? lightHeader : darkHeader;

  return (
    <div className={header}>
      <div className={`${headerLogo} ${headerTheme} `}>
        <Link to="/">
          <Logo mini />
        </Link>
      </div>
      <div className={headerNav}>
        <Nav className={headerTheme} />
      </div>
      <div className={`${headerUserOptions} ${headerTheme} `}>
        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
