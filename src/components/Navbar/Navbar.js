import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { useEffect } from "../../utilities";


const cx = classNames.bind(styles);
const classes = cx('block-language')
 const Navbar = (position)=>{
    useEffect(()=>{
        function menuBar() {
            const up = document.querySelector(`.${cx('up')}`);
            const mid = document.querySelector(`.${cx('mid')}`);
            const down = document.querySelector(`.${cx('down')}`);
            const menuBar = document.querySelector(`.${cx('menu-bar')}`);
            menuBar.addEventListener("click", function () {
                up.classList.toggle(`${cx('rotateUp')}`)
                mid.classList.toggle(`${cx('ClearMid')}`)
                down.classList.toggle(`${cx('rotateDown')}`)
            })
        }
        menuBar()


        const expandLis = document.querySelectorAll(`.${cx('expand-li')}`);
        expandLis.forEach((expandLi,index)=>{
            expandLi.addEventListener("click",()=>{
                const expandLiUl = document.querySelectorAll(`.${cx('expand-li-ul')}`);
                expandLi.style.height = `${expandLi.clientHeight === 30 ?  expandLiUl[index].offsetHeight + 30 :30}px`;
               
            })
        
        })
    })

    return `<div class=${cx('navbar')}>
        <div class=${cx('contain-menu-bar')}>
            <div class=${cx('menu-bar')}>
                <div class=${cx('up')}></div>
                <div class=${cx('mid')}></div>
                <div class=${cx('down')}></div>
            </div>
        </div>
        <div class=${cx('contain-navbar')}>
            <div class=${cx('navi-position')}>
                ${position}
            </div>
            <div class=${cx('navbar-menu')}>
                <ul>
                    <li><a href="/">home</a></li>
                    <li class=${cx('expand-li')}>
                        <div><a>portfolio</a><i class="fa-solid fa-chevron-down"></i></div>
                        <ul class=${cx('expand-li-ul')}>
                            <li><a href="#/project/2">2 column</a></li>
                            <li><a href="#/project/3">3 column</a></li>
                            <li><a>2 column masonory</a></li>
                        </ul>
                    </li>
                    <li><a>history</a></li>
                    <li><a href="/contact" >contact</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
        <div class=${cx('switchLanguage')}>
            <div class=${cx('block-language')}>Eng</div>
            <div class=${`${classes} ${cx('check')}`} >Vie</div>
        </div>
    </div>`
}
export default Navbar