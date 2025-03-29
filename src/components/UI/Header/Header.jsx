import { NavLink } from "react-router-dom";
import { links } from "../../../data";
import inst from "../../../assets/sprite.svg";
import classes from "./Header.module.css";
import { SocialList } from "../SocialList/SocialList";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const cslLink = ({ isActive }) =>
    isActive ? classes.current + " " + classes.link : classes.link;

  const socialLink = { svg: inst, id: "inst" };

  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Logo />
          </li>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={cslLink}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <SocialList socialLink={socialLink} />
      </nav>
    </header>
  );
};

