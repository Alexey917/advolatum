import { SocialList } from "../SocialList/SocialList"
import { Logo } from "../Logo/Logo";
import classes from "./Footer.module.css";
import tikTok from "../../../assets/sprite.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLink = {svg: tikTok, id: 'tikTok'};
  const isFooter = true;

  return (
    <footer>
      <nav className={classes.nav}>
        <Link to="privacy_policy" className={classes.privacy_policy}>политика конфиденциальности<br/>
        согласие на обработку персональных данных</Link>
        <Logo isFooter={isFooter} />
        <SocialList socialLink={socialLink} />
      </nav>
    </footer>
  )
}