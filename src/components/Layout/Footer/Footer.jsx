import React from "react";
import Nav from "../../Nav/Nav";
import { Facebook, Insta, Twitter, Tiktok, FitLogo } from "../../../svg";
import styles from "./footer.module.scss";
import useHideLayoutComponents from "../../../hooks/useHideLayoutComponents";

const {
  footerSection,
  footerLogo,
  footerContact,
  footerContactTitle,
  footerSocial,
  footerNav,
} = styles;

const Footer = () => {
  const hideLayoutComponents = useHideLayoutComponents();

  if (hideLayoutComponents) {
    return null;
  }

  return (
    <footer className={footerSection}>
      <div className={footerLogo}>
        <FitLogo />
      </div>
      <div className={footerContact}>
        <h6 className={footerContactTitle}>contact us on</h6>
        <div className={footerSocial}>
          <Facebook />
          <Twitter />
          <Insta />
          <Tiktok />
        </div>
      </div>
      <div className={footerNav}>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
