import tg from "../../../assets/sprite.svg";
import vk from "../../../assets/sprite.svg";
import classes from "./SocialList.module.css";


export const SocialList = ( {socialLink} ) => {
  return (
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
          <use href={socialLink.svg + `#${socialLink.id}`}></use>
        </svg>
      </li>
    </ul>
  )
}