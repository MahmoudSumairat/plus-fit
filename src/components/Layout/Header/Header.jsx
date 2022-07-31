import React from "react";
import Logo from "../../Logo/Logo";
import UserOptions from "./UserOptions/UserOptions";
import styles from "./header.module.scss";
import Nav from "../../Nav/Nav";
import { Link } from "react-router-dom";
import useHideLayoutComponents from "../../../hooks/useHideLayoutComponents";

const { header, headerLogo, headerNav, headerUserOptions } = styles;

const Header = () => {
  const hideLayoutComponents = useHideLayoutComponents();

  if (hideLayoutComponents) {
    return null;
  }

  return (
    <div className={header}>
      <div className={headerLogo}>
        <Link to="/">
          <Logo mini />
        </Link>
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
