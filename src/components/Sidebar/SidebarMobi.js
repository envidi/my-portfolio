import classNames from "classnames/bind";
import styles from "./sidebarMobi.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import LinkSocialMediaMobi from "./LinkSocialMedia/LinkSocialMediaMobi.js";
import MySkillMobi from "./MySkill/MySkillMobi.js";
import { useEffect } from "../../utilities";
import skill from "./MySkill/MySkill.module.scss";


const cx = classNames.bind(styles);
// const cs = classNames.bind(skill);
const SidebarMobi = ()=>{
   
    return `
    <div class=${cx('wrapper')}>
        <div class=${cx('sidebar')}>
            ${UserInfo()}   
            ${MySkillMobi()}    
            ${LinkSocialMediaMobi()}    
        </div>
    </div>`
}
export default SidebarMobi;