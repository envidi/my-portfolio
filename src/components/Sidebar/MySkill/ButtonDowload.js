import classNames from "classnames/bind";
import styles from "./btndowload.module.scss";
import { useEffect,useState,myLanguage,myTechnology,anotherSkill } from "../../../utilities/index.js";

const cx = classNames.bind(styles);

function ButtonDowload(){
    useEffect(()=>{
      
        const dowloadBtn = document.querySelector(`.${cx('contain-cv')}`)
        dowloadBtn.addEventListener("click",()=>{
            console.log(1)
            window.location.replace("nguyen-van-duc-work247.pdf")
        })
    })
    return `
    <div  class=${cx('contain-cv')}>
    <div id="testBtn" class=${cx('cv')}>
        DOWNLOAD CV <i class="fa-solid fa-download"></i>
        
    </div>
            
</div>
    `
}
export default ButtonDowload