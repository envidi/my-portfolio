import classNames from "classnames/bind";
import styles from "./LinkSocialMedia.module.scss";

const cx = classNames.bind(styles);

const LinkSocialMedia = ()=>{
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