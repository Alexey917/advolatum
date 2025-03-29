import logo from "../../../assets/sprite.svg";
import classes from "./Logo.module.css";

export const Logo = ( {isFooter} ) => {
  return (
    <>
      <svg className={isFooter ? classes.footer__logo : classes.logo}>
        <use href={logo + "#logo"}></use>
      </svg>
    </>
    
  )
}