import { NavLink } from "react-router-dom";
import logo from "../../../assets/sprite.svg";
import tg from "../../../assets/sprite.svg";
import vk from "../../../assets/sprite.svg";
import inst from "../../../assets/sprite.svg";
import classes from "./Header.module.css";

export const Header = () => {

  const cslLink = ({isActive}) => isActive ? classes.current + " " + classes.link : classes.link;

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
        <svg className={classes.logo}>
          <use href={logo + "#logo"}></use>
        </svg>
        </li>
        <li><NavLink to="/" className={cslLink}>Главная</NavLink></li>
        <li><NavLink to="collection" className={cslLink}>Коллекции</NavLink></li>
        <li><NavLink to="aboutUs" className={cslLink}>О нас</NavLink></li>
        <li><NavLink to="contacts" className={cslLink}>Контакты</NavLink></li>
        <li><NavLink to="basket" className={cslLink}>Корзина</NavLink></li>
      </ul>

      <ul className={classes.social}>
        <li>
        <svg className={classes.tg}>
          <use href={tg + '#tg'}></use>
        </svg>
        </li>
        <li>
        <svg className={classes.vk}>
          <use href={vk + '#vk'}></use>
        </svg> 
        </li>
        <li>
        <svg className={classes.inst}>
          <use href={inst + '#inst'}></use>
        </svg>
        </li>
      </ul>
    </nav>
  )
}

