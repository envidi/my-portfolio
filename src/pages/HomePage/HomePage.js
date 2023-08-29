import Header from "../../components/Header/Header";
import styles from "./homepage.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "../../utilities";
import styleNav from "../../components/Navbar/Navbar.module.scss";
import stylesMain from "../../components/Main/main.module.scss";
import NavbarMobi from "../../components/Navbar/Navbar-Mobi";
import styleHeader from '../../components/Header/header.module.scss'
import styleNavMobi from '../../components/Navbar/Navbar-Mobi.module.scss'




const cx = classNames.bind(styles);
const cs = classNames.bind(styleNav);
const cv = classNames.bind(stylesMain);
const ch = classNames.bind(styleHeader)
const cn = classNames.bind(styleNavMobi)

const HomePage = ()=>{

    useEffect(()=>{
        const containMainNav = document.querySelector(`.${cx('contain-main-nav')}`);
        const buttonNavbar = document.querySelector(`.${cs('menu-bar')}`);                
        const main = document.querySelector(`.${cv('main')}`);
        const pseudoMain = window.getComputedStyle(main, "::after");
        const buttonNavMobi = document.querySelector(`.${cn('menu-bar')}`);  

        
        let isClick = false;
        let isClickMobi = false;
        buttonNavbar.addEventListener("click",()=>{
            const navbar = document.querySelector(`.${cs('navbar-menu')}`);
            const naviPosition = document.querySelector(`.${cs('navi-position')}`)
            

            isClick = !isClick;
            if(isClick){
                main.style.setProperty('--display',"block");
                setTimeout(()=>main.style.setProperty('--opacity',1),1)
            }
            else{
                
                main.style.setProperty('--opacity',0);
                setTimeout(()=>main.style.setProperty('--display',"none"),500)
            }
            navbar.classList.toggle(`${cs('active-navbar-menu')}`)
            naviPosition.classList.toggle(`${cs('active-navi-position')}`)
            containMainNav.classList.toggle(`${cx('active-contain-main-nav')}`)
        })




        buttonNavMobi.addEventListener("click",()=>{
            const navbar = document.querySelector(`.${cn('navbar-menu')}`);
            const naviPosition = document.querySelector(`.${cn('navi-position')}`)
            const navBarMobi = document.querySelector(`.${cn('navbar')}`)
            
        
            

            isClickMobi = !isClickMobi;
            if(isClickMobi){
                main.style.setProperty('--display',"block");
                setTimeout(()=>main.style.setProperty('--opacity',1),1)
            }
            else{
                
                main.style.setProperty('--opacity',0);
                setTimeout(()=>main.style.setProperty('--display',"none"),500)
            }
            navBarMobi.classList.toggle(`${cn('active-nav-bar')}`)
            navbar.classList.toggle(`${cn('active-navbar-menu')}`)
            naviPosition.classList.toggle(`${cn('active-navi-position')}`)
            buttonNavMobi.classList.toggle(`${cn('active-menuBar-mobi')}`)
        })
    })
    return `<div class=${cx('container')}>
        ${Header()}
        ${NavbarMobi('HOME')}
        <div class=${cx('contain-sidebar-main')}>
            ${Sidebar()}
            <div class=${cx('contain-main-nav')}>
                ${Main()}
                ${Navbar("HOME")}
               
            </div>
            
        </div>
        </div>`
}
export default HomePage