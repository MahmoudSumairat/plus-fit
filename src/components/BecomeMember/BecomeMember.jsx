import React, { useState, useEffect } from "react";
import { getBecomeMemberSale } from "../../API/endpoints/becomeMember";
import becomeMemberImage from "../../data/becomeMember/Images/becomeMember.jpg";
import becomeMemberLogo from "../../data/becomeMember/Images/+FIT Logo.svg";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";

import styles from "./becomeMember.module.scss";

const {
  becomeMemberSection,
  becomeMemberImgContainer,
  becomeMemberImg,
  becomeMemberDescription,
  becomeMemberInput,
  becomeMemberInfo,
  becomeMemberButton,
  becomeMemberImgText,
  becomeMemberOverlay,
  becomeMemberLogoImg,
} = styles;

const BecomeMember = () => {
  const [becomeMemberSale, setBecomeMemberSale] = useState(0);

  useEffect(() => {
    setBecomeMemberSale(getBecomeMemberSale());
  }, []);

  return (
    <div className={becomeMemberSection}>
      <div className={becomeMemberInfo}>
        <p className={becomeMemberDescription}>
          get your first {becomeMemberSale}% off, go ahead and sign up to be a
          +fit member
        </p>
        <Input
          styleType="modified"
          placeholder="enter your email address"
          className={becomeMemberInput}
        />
        <Button className={becomeMemberButton} buttonType="borderDark">
          Submit
        </Button>
      </div>
      <div className={becomeMemberImgContainer}>
        <div className={becomeMemberOverlay} />
        <img
          src={becomeMemberImage}
          className={becomeMemberImg}
          alt="Become A +FIT Member"
        />
        <h3 className={becomeMemberImgText}>
          <span>become a</span>
          <img
            className={becomeMemberLogoImg}
            alt="logo"
            src={becomeMemberLogo}
          />
          <span>Member</span>
        </h3>
      </div>
    </div>
  );
};

export default BecomeMember;
