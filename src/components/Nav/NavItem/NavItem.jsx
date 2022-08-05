import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styles from "./navItem.module.scss";

const { navItem, activeNav } = styles;

const NavItem = ({ route }) => {
  const { pathname } = useLocation();

  return (
    !route.hideFromMenu && (
      <li
        className={`${navItem} ${
          pathname.includes(route.link) ? activeNav : ""
        } `}
        key={route.link}
      >
        <Link to={route.link}>{route.name} </Link>
      </li>
    )
  );
};

export default NavItem;
