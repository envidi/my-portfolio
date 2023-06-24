import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import LinkSocialMedia from "./LinkSocialMedia/LinkSocialMedia.js";
import MySkill from "./MySkill/MySkill";
import { useEffect } from "../../utilities";
import skill from "./MySkill/MySkill.module.scss";


const cx = classNames.bind(styles);
const cs = classNames.bind(skill);
const Sidebar = ()=>{
   useEffect(()=>{
      
   })
    return `
    <div class=${cx('wrapper')}>
        <div class=${cx('sidebar')}>
            ${UserInfo()}   
            ${MySkill()}    
            ${LinkSocialMedia()}    
        </div>
    </div>`
}
export default Sidebar;