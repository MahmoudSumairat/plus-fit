import React from "react";
import { User, Bag } from "../../../svg";
import styles from "./userOptions.module.scss";
const { userOptions, user, bag } = styles;

const UserOptions = () => {
  return (
    <div className={userOptions}>
      <div className={user}>
        <User />
      </div>
      <div className={bag}>
        <Bag />
      </div>
    </div>
  );
};

export default UserOptions;
