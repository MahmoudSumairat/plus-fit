import React from "react";
import Logo from "../../Logo/Logo";
import UserOptions from "../UserOptions/UserOptions";
import styles from "./header.module.scss";
import Nav from "./Nav/Nav";

const { header, headerLogo, headerNav, headerUserOptions } = styles;

const Header = () => {
  return (
    <div className={header}>
      <div className={headerLogo}>
        <Logo />
      </div>
      <div className={headerNav}>
        <Nav />
      </div>
      <div className={headerUserOptions}>
        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
