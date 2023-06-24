import classNames from "classnames/bind";
import stylesMain from "../../../components/Main/main.module.scss";
import styles from "./SignIn.module.scss";
import { useEffect,award as awards, myServices, router } from "../../../utilities";
import Joi from "joi";
import { SignIn as SignInMethod } from "../../../components/Fetch";
import Swal from 'sweetalert2'


const SighInSchema = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','vn'] } }),
    password:Joi.string().required(),
    
});


const cx = classNames.bind(stylesMain);
const cs = classNames.bind(styles);

const SignIn =()=>{

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
    const formSignUp = document.querySelector(`.${cs('form-sign-in')}`)
    formSignUp.addEventListener("submit",function(e){
        e.preventDefault()
        let email = document.querySelector(`#${cs('email')}`).value
        let password = document.querySelector(`#${cs('password')}`).value
        
        
        const newUserValidate = {
            email,
            password,
            
        }
        const SignInUser = {
            email,
            password
            
        }
        const inputFields = {
            email : 'email',
            password : 'password',                                
        }

        const { error } = SighInSchema.validate(newUserValidate, { abortEarly: false });
        const errorMap = {};
        const errors = error?.details;
        if(errors){
            errors.forEach((err) => {
                errorMap[err.path[0]] = err.message;
              });
        }
      
        if(error){
        
           
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
        SignInMethod(SignInUser,(data)=>{
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
                localStorage.setItem("user", JSON.stringify(data));
                router.navigate("/admin/")
            }
        })
        
    })
})

useEffect(()=>{
    const formSignUp = document.querySelector(`.${cs('form-sign-in')}`);
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

            
                
           
            <div class=${cs('get-contact')}>Sign-in</div>
            <form class=${cs('form-sign-in')}>
                
                <div class=${cs('contain-input-contact')}>
                    <label class=${cs('icon-contact')}>@</label>
                    <input type="text" data-id="0" id =${cs('email')} class=${cs('input-contact')} placeholder="Email">
                </div>
                <span name="email" class=${cs('error-element')}></span>

                <div class=${cs('contain-input-contact')}>
                    <label class=${cs('icon-contact')}><i class="fa-solid fa-lock"></i></label>
                    <input type="password" data-id="1" id=${cs('password')} class=${cs('input-contact')} placeholder="Password">
                    <div data-id="1" class=${cs('showPass')}><i class="fa-solid fa-eye"></i></div>
                </div>
                <span name="password" class=${cs('error-element')}></span>

                <div class=${cs('contain-btn')}>
                    <button class=${cs('submit-form')}>Login</button>
                    <button class=${cs('sign-up-form')}>
                        <a href="/signup" class=${cs('sign-up-link')}>sign up</a>
                    </button>
                </div>
              
            </form>
                
            
           
            
            <footer class=${cx('footer')}>
                <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
                <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
            </footer>
                
                


    </div>`;
}
export default SignIn;