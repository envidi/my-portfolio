import classNames from "classnames/bind";
import styles from "./LinkSocialMedia.module.scss";
import { useEffect } from "../../../utilities";

const cx = classNames.bind(styles);

const LinkSocialMedia = ()=>{
    useEffect(()=>{
        document.querySelectorAll(`.${cx('icon-social-media')}`)[0].addEventListener('click',(e)=>{
            window.location.href="https://www.facebook.com/longthien.thanthien/?locale=vi_VN"
        })
        document.querySelectorAll(`.${cx('icon-social-media')}`)[1].addEventListener('click',(e)=>{
            window.location.href="https://github.com/envidi"
        })
    })
    return `<div class=${cx('social-media')}>
        <div class=${cx('icon-social-media')}><i class="fa-brands fa-facebook"></i></div>
        <div class=${cx('icon-social-media')}><i class="fa-brands fa-github"></i></div>
        <div class=${cx('icon-social-media')}><i class="fa-brands fa-instagram"></i></div>
        <div class=${cx('icon-social-media')}><i class="fa-brands fa-twitter"></i></div>
        <div class=${cx('icon-social-media')}><i class="fa-brands fa-linkedin"></i></div>
    </div>
    `
}
export default LinkSocialMedia