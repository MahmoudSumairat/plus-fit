import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import UserOptions from "./UserOptions/UserOptions";
import styles from "./header.module.scss";
import Nav from "../../Nav/Nav";
import { Link, useLocation } from "react-router-dom";
import useHideLayoutComponents from "../../../hooks/useHideLayoutComponents";
import { Menu } from "../../../svg";
import MobileNav from "../../Nav/MobileNav/MobileNav";
import Animate from "../../core/Animate/Animate";

const {
  header,
  headerLogo,
  headerNav,
  headerUserOptions,
  darkHeader,
  lightHeader,
  menuButton,
} = styles;

const Header = () => {
  const hideLayoutComponents = useHideLayoutComponents();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (hideLayoutComponents) {
    return null;
  }

  const headerTheme = location.pathname === "/" ? lightHeader : darkHeader;

  return (
    <>
      <div className={header}>
        <div className={`${headerLogo} ${headerTheme} `}>
          <Link to="/">
            <Logo mini />
          </Link>
        </div>
        <div className={headerNav}>
          <Nav
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
            className={headerTheme}
          />
        </div>
        <div className={`${headerUserOptions} ${headerTheme} `}>
          <span onClick={() => setShowMobileMenu(true)} className={menuButton}>
            <Menu />
          </span>
          <UserOptions />
        </div>
      </div>
      <Animate showsIn={showMobileMenu} animationType="fadeInOut">
        <MobileNav setShowMobileMenu={setShowMobileMenu} />
      </Animate>
    </>
  );
};

export default Header;
