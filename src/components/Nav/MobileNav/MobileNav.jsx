import routesList from "../../../routes/routesList";
import { Clear } from "../../../svg";
import NavItem from "../NavItem/NavItem";
import styles from "./mobileNav.module.scss";
const { navContainer, nav, navList, closeMenu } = styles;

const MobileNav = ({ setShowMobileMenu }) => {
  return (
    <div className={navContainer}>
      <span onClick={() => setShowMobileMenu(false)} className={closeMenu}>
        <Clear />
      </span>
      <nav className={nav}>
        <ul className={navList}>
          {routesList.map((route) => {
            return (
              <NavItem
                onClick={() => setShowMobileMenu(false)}
                key={route.link}
                route={route}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
