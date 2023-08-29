import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { useEffect } from "../../utilities";
import NavbarMobi from "../Navbar/Navbar-Mobi";

const cx = classNames.bind(styles);



const Header = ()=>{
   
    useEffect(()=>{
       
    })
    return `<div class=${cx('navDiv')}>
        <div class=${cx('icon-sidebar')}>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
       
    </div>`
}
export default Header;