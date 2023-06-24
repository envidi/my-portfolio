import classNames from "classnames/bind";
import styles from "./MySkill.module.scss";
import { useEffect,useState,myLanguage,myTechnology,anotherSkill } from "../../../utilities/index.js";


const cx = classNames.bind(styles);

const MySkill = () => {
    useEffect(()=>{
        const desc = document.querySelectorAll(`.${cx('desc')}`);
        const technologys = document.querySelectorAll(`.${cx('technology')}`)
        let isClick = false;
        technologys.forEach((tech,index)=>{
            tech.addEventListener("click",(e)=>{
                const desc = document.querySelectorAll(`.${cx('desc')}`);              
                const down = document.querySelectorAll(`.${cx('icon-chevron-down')}`);              
                const left = document.querySelectorAll(`.${cx('icon-chevron-left')}`);              
               isClick = !isClick
                tech.style.height = `${tech.clientHeight === 30  ? desc[index].offsetHeight + 30  : 30 }px `;
                down[index].classList.toggle(`${cx('deactive-display')}`)
                left[index].classList.toggle(`${cx('active-display')}`)
              
              
            })
        })
    })
    
    
    return `<div class=${cx('my-skill')}>
                <div class=${cx('my-address')}>
                    <ul>
                        <li><span>Residence:</span><span class=${cx('my-address-block')}>VietNam</span></li>
                        <li><span>City:</span><span class=${cx('my-address-block')}>Thai Binh</span></li>
                        <li><span>Age:</span><span class=${cx('my-address-block')}>20</span></li>
                    </ul>    
                </div>
                <div class=${cx('my-language')}>
                    <div>Language : </div>
                    <div class=${cx('contain-circle')}>
                        ${myLanguage.map((language,index)=>{
                            return `<span class=${cx('language')}>${language}</span> `
                        }).join(" , ")}
                    
                    
                    </div>
                </div>
                <div class=${cx('my-technology')}>

                    <div class=${cx('contain-technology')}>
                        ${myTechnology.map((technology,index)=>{
                            const {name : n , desc : d } = technology;
                            return `
                            <span class=${cx('technology')}>
                                <div class=${cx('namea')}><div>${n}</div>  
                                <span class=${cx('icon-down')}>
                                <div class=${cx('icon-chevron-down')} >
                                    <i class="fa-solid fa-chevron-down "></i>
                                </div>
                                <div class=${cx('icon-chevron-left')}>
                                    <i class="fa-solid fa-chevron-left "></i>
                                </div>
                                
                                    
                                </span>
                                </div>    
                                <div class=${cx('desc')}>  ${d}</div>    
                        
                            </span>
                            `
                        }).join(" ")}
                    
                    
                    </div>
            </div>
            <div class=${cx('another-skill')}>

                    <ul class=${cx('contain-technology')}>
                        ${anotherSkill.map((technology,index)=>{
                            const {name : n  } = technology;
                            return `<li><span><i class="fa-solid fa-check"></i></span>${n}</li>`

                        }).join(" ")}
                    
                    
                    </ul>
            </div>
            <div class=${cx('contain-cv')}>
                <div class=${cx('cv')}>
                    DOWNLOAD CV <i class="fa-solid fa-download"></i>
                </div>
                        
            </div>
        
    </div>`
}
export default MySkill;