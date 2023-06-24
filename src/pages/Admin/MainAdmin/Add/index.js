import classNames from "classnames/bind";
import styles from "./Add.module.scss";
import { router, useEffect } from "../../../../utilities";
import { postMethod } from "../../../../components/Fetch";
import { uploadFileCloudinary } from "../../../../utilities";

import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required().min(3).max(30).default('N/A'),
    desc: joi.string().required(),
    source:joi.string().required().min(3).max(70),
    link:joi.string().required().min(3).max(70),
    time:joi.string().required().min(3).max(30),
    startDate:joi.string().required(),
    image:joi.string().required().min(3).max(70),   
    skills:joi.string().required().min(3).max(70),
    role:joi.string().required().min(3).max(70),

});



const cx = classNames.bind(styles)

const Add = ()=>{

    const roleArr = ["fullstack","Front-end","Back-end"]

    useEffect(()=>{
        
        const form = document.querySelector(`.${cx('general-form')}`);

        form.addEventListener("submit",async(e)=>{
            e.preventDefault();
            
            let title = document.querySelector(`.${cx('title')}`).value || "";            
            let desc = document.querySelector(`.${cx('desc')}`).value || "";            
            const source = document.querySelector(`.${cx('reposity')}`).value || "";
            const link = document.querySelector(`.${cx('link-website')}`).value || "";
            const time = document.querySelector(`.${cx('time')}`).value || "";
            // const imageName = document.querySelector(`.${cx('image-form')}`)?.files[0]?.name || "" ;
            const imageName = document.querySelector(`.${cx('image-form')}`)?.files[0] || "" ;
            // const pathImage = "../../../src/Image/";
            // const image = pathImage+imageName 
            const image= await uploadFileCloudinary(imageName)
            

            const startDate = document.querySelector(`.${cx('startDate')}`).value || "";
            const skills = document.querySelector(`.${cx('skills')}`).value || "";
            const role = document.querySelector(`.${cx('role')}`).value || "Front-end";
            const newData = {
                name : title,
                desc,
                startDate,
                time,
                skills,
                role,
                image,
                source,
                link,
            }
            const { error } = productSchema.validate(newData, { abortEarly: false });
            
            const inputFields = {
                name : 'name',
                desc : 'desc',
                source : 'source',
                link : 'link',
                time : 'time',
                startDate : 'startDate',
                skills : 'skills',
                image : 'image',
                role:'role'
            }
            const errorMap = {};
            const errors = error?.details;
            if(errors){
                errors.forEach((err) => {
                    errorMap[err.path[0]] = err.message;
                  });
            }
          
          
            if (error) {                                
               
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
          
            postMethod(newData,()=>{
                router.navigate("/admin")
            })
            
        })
    })

    return `
    <div class=${cx('redirect')}>HOME/ADD</div>
    <form class=${cx('general-form')}   enctype="multipart/form-data">

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Title</label>
            <input class=${cx('title')} placeholder="Title" type="text" name="name" />
            <span name="name" class=${cx('error-element')}></span>
        </div>
    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Desc</label>
            <input class=${cx('desc')} type="text" name="desc" placeholder="Description" />
            <span name="desc" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >StartDate</label>
            <input class=${cx('startDate')} type="text" name="startDate" placeholder="StartDate" />
            <span name="startDate" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Time</label>
            <input class=${cx('time')} type="text" name="time" placeholder="Time" />
            <span name="time" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Role</label>
            <select class=${cx('role')} name="" id="">
            ${roleArr.map((role,index)=>{

                return ` <option value="${role}">${role}</option>`
            }).join("")}
            </select>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Skills</label>
            <input class=${cx('skills')} type="text" name="skills" placeholder="Skills" />
            <span name="skills" class=${cx('error-element')}></span>
        </div>

    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Hình</label>
            <input class=${cx('image-form')} type="file" name="image" />
            <span name="image" class=${cx('error-element')}></span>
        </div>
    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Reposity</label>
            <input class=${cx('reposity')} type="text" name="source" placeholder="Reposity" />
            <span name="source" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Link Website</label>
            <input class=${cx('link-website')} type="text" name="link"  placeholder="Link Website" />
            <span name="link" class=${cx('error-element')}></span>
        </div>        
    
        <div class=${cx('block_form-2')}>
           <button class=${cx('submit-new')}>
                New
           </button>

        </div>
    
   
        
    </form>
    `

}
export default Add