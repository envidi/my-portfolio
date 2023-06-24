import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { useEffect } from "../../utilities";

const cx = classNames.bind(styles);



const Header = ()=>{
   
    return `<div class=${cx('black')}></div>`
}
export default Header;