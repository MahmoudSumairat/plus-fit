import React from "react";
import { Link } from "react-router-dom";
import { User, Bag } from "../../../../svg";
import styles from "./userOptions.module.scss";
const { userOptions, user, bag } = styles;

const UserOptions = () => {
  return (
    <div className={userOptions}>
      <div className={user}>
        <Link to="/login">
          <User />
        </Link>
      </div>
      <div className={bag}>
        <Bag />
      </div>
    </div>
  );
};

export default UserOptions;
