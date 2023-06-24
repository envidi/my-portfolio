import classNames from "classnames/bind";
import stylesMain from "../../../components/Main/main.module.scss";
import styles from "./SignUp.module.scss";
import { useEffect,award as awards, myServices } from "../../../utilities";
import Joi from "joi";
import { postUser } from "../../../components/Fetch";
import Swal from 'sweetalert2'

const SighUpSchema = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','vn'] } }),
    password:Joi.string().required(),
    repeat_password: Joi.any()
    .valid(Joi.ref('password')).messages({
        'any.only': "Password isn't correct",
      }),      
});


const cx = classNames.bind(stylesMain);
const cs = classNames.bind(styles);

const SignUp =()=>{ 


    useEffect(()=>{
        const iconContact = document.querySelectorAll(`.${cs('icon-contact')}`);
        const inputContact = document.querySelectorAll(`.${cs('input-contact')}`);
        const formContact = document.querySelector(`.${cs('form-contact')}`);
        
        inputContact.forEach((input,index)=>{                        
            input.addEventListener("focus",function(){
                iconContact[index].classList.add(`${cs('active-icon-contact')}`)
            })
            input.addEventListener("blur",function(){
                iconContact[index].classList.remove(`${cs('active-icon-contact')}`)
            })
        })                             
   })
   useEffect(()=>{
        const formSignUp = document.querySelector(`.${cs('form-sign-up')}`)
        formSignUp.addEventListener("submit",function(e){
            e.preventDefault()
            let email = document.querySelector(`#${cs('email')}`).value
            let password = document.querySelector(`#${cs('password')}`).value
            let repeat_password = document.querySelector(`#${cs('re-password')}`).value
            
            const newUserValidate = {
                email,
                password,
                repeat_password
            }
            const newUser = {
                email,
                password
                
            }
            const inputFields = {
                email : 'email',
                password : 'password',
                repeat_password : 're-password',
              
              
            }

            const { error } = SighUpSchema.validate(newUserValidate, { abortEarly: false });
            if(error){
            
                const errorMap = {};
                const errors = error.details;
                errors.forEach((err) => {
                  errorMap[err.path[0]] = err.message;
                });
                Object.keys(inputFields).forEach((field)=>{                
                    const inputField = inputFields[field];
                    const errorElement = document.querySelector(`span[name="${inputField}"]`);                    
                    if (errorMap[field]) {
                        errorElement.innerHTML = errorMap[field];
                      } else {
                        errorElement.innerHTML = '';
                      }
                })
            
                return;

            }

          postUser(newUser,(data)=>{
            if(typeof data === "string"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${data}!`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc107',
                   
                  })
            }
            else{
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `Sign up successfully!!`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#ffc107',
                   
                  })
                  let emailValue = document.querySelector(`#${cs('email')}`)
                  emailValue.value = ""
                  let passwordValue = document.querySelector(`#${cs('password')}`)
                  passwordValue.value = ""
                  let repeat_passwordValue = document.querySelector(`#${cs('re-password')}`)
                  repeat_passwordValue.value = ""
            }
          })
        })
   })

   useEffect(()=>{
       const formSignUp = document.querySelector(`.${cs('form-sign-up')}`);
       formSignUp.addEventListener("click",(e)=>{
            const clicked = e.target
            const btnShowPass = clicked.closest(`.${cs('showPass')}`)
            if(!btnShowPass)return

            
            if(btnShowPass.classList.contains(`${cs('showPass')}`)){
                const inputPassword = document.querySelectorAll(`.${cs('input-contact')}`)
                const id = btnShowPass.dataset.id 
                inputPassword[id].type = inputPassword[id].type == 'password' ? 'text' : 'password'
                
            }
          
          
       })
        
   })

   

    return `<div class=${cx('main')}>                                       
                <div class=${cs('get-contact')}>Sign-up</div>
                <form class=${cs('form-sign-up')}>

                    <div class=${cs('contain-input-contact')}>
                        <label class=${cs('icon-contact')}>@</label>
                        <input type="text" id=${cs('email')} class=${cs('input-contact')} placeholder="Email">
                     
                    </div>
                    <span name="email" class=${cs('error-element')}></span>

                    <div class=${cs('contain-input-contact')}>
                        <label class=${cs('icon-contact')}><i class="fa-solid fa-lock"></i></label>
                        <input type="password" id=${cs('password')} class=${cs('input-contact')} placeholder="Password">
                        <div data-id="1" class=${cs('showPass')}><i class="fa-solid fa-eye"></i></div>
                    </div>
                    <span name="password" class=${cs('error-element')}></span>

                    <div class=${cs('contain-input-contact')}>
                        <label class=${cs('icon-contact')}><i class="fa-solid fa-lock"></i></label>
                        <input type="password"  class=${cs('input-contact')} id=${cs('re-password')} placeholder="Re-enter Password">
                        <div data-id="2" class=${cs('showPass')}><i class="fa-solid fa-eye"></i></div>
                    </div>      
                    <span name="re-password" class=${cs('error-element')}></span>

                    <div class=${cs('contain-btn')}>
                        <button class=${cs('submit-form')}>Sign up</button>
                        <button class=${cs('sign-up-form')}>
                            <a href="/login" class=${cs('sign-up-link')}>back</a>
                        </button>
                    </div>

                </form>
                
            
           
            
            <footer class=${cx('footer')}>
                <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
                <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
            </footer>
                
                


    </div>`;
}
export default SignUp;