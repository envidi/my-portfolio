import classNames from "classnames/bind";
import styles from "./edit.module.scss";
import { useEffect, useState } from "../../../../utilities";
import { fetchApi,api_url, putCourse } from "../../../../components/Fetch";

import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required().min(3).max(30).default('N/A'),
    desc: joi.string().required(),
    source:joi.string().required().min(3).max(70),
    link:joi.string().required().min(3).max(70),
    startDate:joi.string().required(),
    time:joi.string().required().min(3).max(30),
    image:joi.string().required().min(3).max(70),   
    skills:joi.string().required().min(3).max(70),
    role:joi.string().required().min(3).max(70)

});


const cx = classNames.bind(styles)

const Edit = (data)=>{
    const [dataForm,setDataForm] = useState({})

    const roleArr = ["fullstack","Front-end","Back-end"]

    
    const {id , name ,desc , link, image :imageOld,role : roles,source, startDate,skills,time} = dataForm
    console.log(roles)
    
    var originalDate = startDate || null;
    if(originalDate){
        var parts = originalDate.split('/');
        var formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];                
    }
    if(dataForm === {})return

    
    useEffect(()=>{
        const { id } = data.data;
        const getDataForm = (api_url)=>{
            return new Promise(function(resolve,reject){
                const dataApiForm = fetchApi(`${api_url}/${id}`)
                resolve(dataApiForm)
            })
        }
        getDataForm(api_url)
        .then((res)=>{
            setDataForm(res)
        })
        
    },[])

    useEffect(()=>{
        
        const form = document.querySelector(`.${cx('general-form')}`);

        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let name = document.querySelector(`.${cx('title')}`).value || "";            
            let desc = document.querySelector(`.${cx('desc')}`).value || "";            
            const source = document.querySelector(`.${cx('reposity')}`).value || "";
            const link = document.querySelector(`.${cx('link-website')}`).value || "";
            const time = document.querySelector(`.${cx('time')}`).value || "";
            let image 
            const imageName = document.querySelector(`.${cx('image-form')}`)?.files[0]?.name ;
            if(imageName){
                const pathImage = "../../../src/Image/";
                image = pathImage+imageName 

            }
            else{
                image = imageOld
            }

            const startDate = document.querySelector(`.${cx('startDate')}`).value || ""
            const skills = document.querySelector(`.${cx('skills')}`).value || "";
            const role = document.querySelector(`.${cx('role')}`).value || "";
            
            const newData = {
                name,
                desc,
                link,
                source,
                image,
                startDate,
                skills,
                role,
                time
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
            }
          
            if (error) {                                
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
            putCourse(newData,id)
         
            
        })
    })
    return `
    <div class=${cx('redirect')}>HOME/EDIT</div>
    <form class=${cx('general-form')}  enctype="multipart/form-data">

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Title</label>
            <input class=${cx('title')} placeholder="Title" type="text" name="name" value="${name}" />
            <span name="name" class=${cx('error-element')}></span>
        </div>
    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Desc</label>
            <input class=${cx('desc')} type="text" name="desc" placeholder="Description" value="${desc}" />
            <span name="desc" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >StartDate</label>
            <input class=${cx('startDate')} type="date" name="startDate" placeholder="${formattedDate}" value="${formattedDate}"/>
            <span name="startDate" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Time</label>
            <input class=${cx('time')} type="text" name="time" placeholder="StartDate" value="${time}"/>
            <span name="time" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Role</label>
            <select class=${cx('role')} name="" id="">
            ${roleArr.map((role,index)=>{               
                return ` <option ${role === roles ? "selected" : ""} value="${role}">${role}</option>`
            }).join("")}
                
            </select>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Skills</label>
            <input class=${cx('skills')} type="text" name="skills" placeholder="Skills" value="${skills}" />
            <span name="skills" class=${cx('error-element')}></span>
        </div>

    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Hình</label>
            <input class=${cx('image-form')} type="file" name="image" />
            <img style="margin-top:10px" width="40" src=${imageOld}>
            <span name="image" class=${cx('error-element')}></span>
        </div>
    
        <div class=${cx('block_form')}>
            <label class="label_addsp" >Reposity</label>
            <input class=${cx('reposity')} type="text" name="source" placeholder="Reposity" value="${source}" />
            <span name="source" class=${cx('error-element')}></span>
        </div>

        <div class=${cx('block_form')}>
            <label class="label_addsp" >Link Website</label>
            <input class=${cx('link-website')} type="text" name="link" placeholder="Link Website" value="${link}" />
            <span name="link" class=${cx('error-element')}></span>
        </div>        
    
        <div class=${cx('block_form-2')}>
           <button class=${cx('submit-new')}>
                Edit
           </button>

        </div>
    
   
        
    </form>
    `

}
export default Edit