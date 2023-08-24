import classNames from "classnames/bind";
import styles from "../../components/Main/main.module.scss";
import stylesHistory from './History.module.scss'
import { myProject, useState,useEffect,historyData } from "../../utilities";
import { award as awards } from "../../utilities";



const cx = classNames.bind(styles);
const cs = classNames.bind(stylesHistory)

function HistoryPage() {
   
    useEffect(()=>{
        const row = document.querySelector(`.${cs('row')}`)
        const mark_light = document.querySelector(`.${cs('mark-light')}`)
        
        row.addEventListener('mouseover',(e)=>{ 
            const target = e.target            
            if (target.classList.contains(`${cs('mark-yellow')}`)) {                
                target.previousElementSibling.classList.add(`${cs('animation')}`)                                
            } 
            else if (target.classList.contains(`${cs('timeline-content')}`)) {                
                const element = target.previousElementSibling.previousElementSibling
                element.classList.add(`${cs('animation')}`) 
                
                
            }
            else if (target.closest(`.${cs('timeline-content')}`)) {
                const element = target.closest(`.${cs('timeline-content')}`).previousElementSibling.previousElementSibling
                element.classList.add(`${cs('animation')}`) 
                
            }
            
        })

        row.addEventListener('mouseout',(e)=>{ 
            const target = e.target            
            if (target.classList.contains(`${cs('mark-yellow')}`)) {                
                target.previousElementSibling.classList.remove(`${cs('animation')}`)                                
            } 
            else if (target.classList.contains(`${cs('timeline-content')}`)) {                
                const element = target.previousElementSibling.previousElementSibling
                element.classList.remove(`${cs('animation')}`)                                 
            }
            else if (target.closest(`.${cs('timeline-content')}`)) {
                const element = target.closest(`.${cs('timeline-content')}`).previousElementSibling.previousElementSibling
                element.classList.remove(`${cs('animation')}`)                
            }                       
        })


    })

  
    
   
    
  return`<div class=${cx('main')}>
   
    <div class=${cs('row')}>
        <div class=${cs('column')}>
            
            <h3>Education</h3>
            ${
                historyData.education.map(history=>{
                    const {name , desc, time , sub,detail} = history
                    return `  <div class=${cs('timeline-content-box')}>
                    <div class=${cs('mark-light')}></div>
                    <div class=${cs('mark-yellow')}></div>
                    <div class=${cs('timeline-content')}>
                        <div class=${cs('contain-title')}>
                            <div style='display:flex;flex-direction:column'>
                                <div class=${cs('title-content')}>
                                        ${name}
                                    </div>
                                    <div class=${cs('subtitle-content')}>
                                        ${sub}
                                </div>
                            </div>
                            <div class=${cs('time')}>${time}</div>
                        </div>
                        <div class=${cs('paragraph')}>
                            ${desc}
                        </div>
                        ${
                            detail ? ` <div class=${cs('history')}>
                            ${detail} <i class="fa-solid fa-chevron-right"></i>
                            </div>` : ''
                        }
                       
                       
                    </div>
                </div>`
                }).join('')
            }                      
        </div>

        


        <div class=${cs('column')}>
            
            <h3>Work History</h3>
            ${
                historyData.work_history.map(history=>{
                    const {name , desc, time , sub,detail} = history
                    return `  <div class=${cs('timeline-content-box')}>
                    <div class=${cs('mark-light')}></div>
                    <div class=${cs('mark-yellow')}></div>
                    <div class=${cs('timeline-content')}>
                        <div class=${cs('contain-title')}>
                            <div style='display:flex;flex-direction:column'>
                                <div class=${cs('title-content')}>
                                        ${name}
                                    </div>
                                    <div class=${cs('subtitle-content')}>
                                        ${sub}
                                </div>
                            </div>
                            <div class=${cs('time')}>${time}</div>
                        </div>
                        <div class=${cs('paragraph')}>
                            ${desc}
                        </div>
                        ${
                            detail ? ` <div class=${cs('history')}>
                            ${detail} <i class="fa-solid fa-chevron-right"></i>
                            </div>` : ''
                        }
                       
                       
                    </div>
                </div>`
                }).join('')
            }     
        </div>
    </div>
             
        <div class=${cx('award')}>
        ${awards.map((award)=>{
            const { name , number} = award
            return ` <div class=${cx('award-block')}>
            <span class=${cx('number-award')}>
                ${number}
            </span>
            <span class=${cx('name-award')}>
                ${name}
            </span>
        </div>`
        }).join("")}
                
        </div>
        <footer class=${cx('footer')}>
            <span class=${cx('footer-block')}>© 2020 Envidi</span>
            <span class=${cx('footer-block')}>Template author:  Envidi</span>
        </footer>

                          
</div>`
}

export default HistoryPage