import classNames from "classnames/bind";
import styles from "../../../components/Main/main.module.scss";
import stylesContact from "./ContactCom.module.scss";
import { useEffect,award as awards, myServices } from "../../../utilities";


const cx = classNames.bind(styles);
const cs = classNames.bind(stylesContact);

const ContactCom =()=>{

   useEffect(()=>{
        const iconContact = document.querySelectorAll(`.${cs('icon-contact')}`);
        const inputContact = document.querySelectorAll(`.${cs('input-contact')}`);
        const formContact = document.querySelector(`.${cs('form-contact')}`);
        
        inputContact.forEach((input,index)=>{
            console.log(input.value)
            

            input.addEventListener("focus",function(){
                iconContact[index].classList.add(`${cs('active-icon-contact')}`)
            })
            input.addEventListener("blur",function(){
                iconContact[index].classList.remove(`${cs('active-icon-contact')}`)
            })
        })
      

        
        
       
   })

    return `<div class=${cx('main')}>
            <div class=${cs('title-contact')}>Contact information</div>
                
            <div class=${cs('contain-info')}>
                <div class=${cs("info")}>
                    <div class=${cs('detail-info')}>
                        <span>Country :</span><span class=${cs('value-info')}>Vietnam</span>                       
                    </div>
                    <div class=${cs('detail-info')}>
                        <span>City :</span><span class=${cs('value-info')}>ThaiBinh</span>
                    </div>
                    <div class=${cs('detail-info')}>                       
                        <span>Street :</span><span class=${cs('value-info')}>DoanKhue</span>
                    </div>
                </div>

                <div class=${cs("info")}>
                    <div class=${cs('detail-info')}>
                        <span>Email :</span><span class=${cs('value-info')}>phanm711996@gmail</span>                       
                    </div>
                    <div class=${cs('detail-info')}>
                        <span>Telegram :</span><span class=${cs('value-info')}>@envidi</span>
                    </div>
                    <div class=${cs('detail-info')}>                       
                        <span>Skype :</span><span class=${cs('value-info')}>envidi</span>
                    </div>
                </div>

                <div class=${cs("info")}>
                    <div class=${cs('detail-info')}>
                        <span>Support service:</span><span class=${cs('value-info')}>0363128965</span>                       
                    </div>
                    <div class=${cs('detail-info')}>
                        <span>Office</span><span class=${cs('value-info')}>0363128965</span>
                    </div>
                    <div class=${cs('detail-info')}>                       
                        <span>Personal</span><span class=${cs('value-info')}>0363128965</span>
                    </div>
                </div>
            </div>
            <div class=${cs('get-contact')}>Get in touch</div>
            <form class=${cs('form-contact')}>
                <div class=${cs('contain-input-contact')}>
                    <label class=${cs('icon-contact')}><i class="fa-solid fa-user"></i></label>
                    <input type="text" data-id="0" class=${cs('input-contact')} placeholder="Name">
                </div>
                <div class=${cs('contain-input-contact')}>
                    <label class=${cs('icon-contact')}>@</label>
                    <input type="text" data-id="1" class=${cs('input-contact')} placeholder="Email">
                </div>
                <div class=${cs('contain-input-contact')}>
                    <label class=${cs('icon-contact')}><i class="fa-solid fa-envelope"></i></label>
                    <input type="text" data-id="2" class=${cs('input-contact')} placeholder="Message">
                </div>
                <button class=${cs('submit-form')}>send message</button>
            </form>
            
            <footer class=${cx('footer')}>
                <span class=${cx('footer-block')}>© 2020 Envidi</span>
                <span class=${cx('footer-block')}>Template author:  Envidi</span>
            </footer>
                
                


    </div>`;
}
export default ContactCom;