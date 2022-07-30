import React from "react";
import { Link } from "react-router-dom";

import styles from "./navItem.module.scss";

const { navItem } = styles;

const NavItem = ({ route }) => {
  return (
    !route.hideFromMenu && (
      <li className={navItem} key={route.link}>
        <Link to={route.link}>{route.name} </Link>
      </li>
    )
  );
};

export default NavItem;
