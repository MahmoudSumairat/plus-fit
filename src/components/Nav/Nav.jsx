import React from "react";
import routesList from "../../routes/routesList";
import styles from "./nav.module.scss";
import NavItem from "./NavItem/NavItem";

const { nav, navList } = styles;

const Nav = () => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        {routesList.map((route) => {
          return <NavItem key={route.link} route={route} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
