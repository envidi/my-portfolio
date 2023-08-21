import classNames from "classnames/bind";
import styles from "../../../components/Main/main.module.scss";
import { myProject, useState,useEffect } from "../../../utilities";
import stylesProject from "../MyProject/MyProject.module.scss";
import styleDetail from "./ProjectDetail.module.scss";
import { award as awards } from "../../../utilities";

const cs = classNames.bind(stylesProject);
const cx = classNames.bind(styles);
const cd = classNames.bind(styleDetail)
function ProjectDetail({data}) {
    const [datas,setData] = useState(myProject);
    const projectSingle = datas.find(value => value.id == data.id)
    
    if(!projectSingle)return `<div>No product detail</div>`

    const {id , name , desc,startDate,time,skills,role,image,source,link} = projectSingle
    const [one, two, three] = image
    
    useEffect(()=>{
        const projectDetail = document.querySelector(`.${cd('projectDetail-detail_repo-website')}`)
        projectDetail.addEventListener('click',(e)=>{
            const target = e.target
            if(target.classList.contains('source') || target.classList.contains('link')){
                const href = target.innerHTML
                window.location.href = href
            }
        })
    })
    
  return`<div class=${cx('main')}>
    <div class=${cd('projectDetail-title')}>
        <div class=${cd('projectDetail-title_title')}>Project title</div>
        <div class=${cd('projectDetail-title_role')}>Web designer</div>
    </div>
    <div class=${cd('projectDetail-banner')}>
        <img src="${one}"/>
    </div>
    <div class=${cd('projectDetail-detail')}>
        <div class=${cd('projectDetail-title_title')}>Project detail</div>
    </div>
    <div class=${cd('projectDetail-wrapper-detail')}>
        <div class=${cd('projectDetail-detail_description')}>
            <div class=${cd('projectDetail-detail_description-title')}>
                Description 
            </div>
            <div class=${cd('projectDetail-detail_desc')}>
            ${desc}     
            </div>
            <div class=${cd('projectDetail-read-more')}>
                  READ MORE <i class="fa-solid fa-chevron-right"></i>
            </div>

        </div>


        <div class=${cd('projectDetail-detail_info')}>
            <ul>
                <li><div>Project Name:  </div> <div class=${cd('info_value')}>${name}</div></li>
                <li><div>Start Date:   </div> <div class=${cd('info_value')}>${startDate}</div></li>
                <li><div>Time Estimate: </div> <div class=${cd('info_value')}>${time}</div></li>
                <li><div>Technology: </div> <div class=${cd('info_value')}>${skills}</div></li>
                <li><div>Role: </div> <div class=${cd('info_value')}>${role}</div></li>
            </ul>

        </div>


    </div>

    <div class=${cd('projectDetail-detail_repo-website')}>
    
    <ul>
        <li>
            <div><i class="fa-brands fa-github"></i> Repository: </div>
            <div class=${cd('source')}>${source}</div>
        </li>
        <li>
            <div><i class="fa-solid fa-globe"></i>  Website: </div>
            <div class=${cd('link')}>${link}</div>
        </li>
    </ul>
    </div>
    <div class=${cd('projectDetail-detail')}>
        <div class=${cd('projectDetail-title_title')}>Result</div>
    </div>
    <div class=${cd('projectDetail-result')}>
        <div>
        <img src="${two}"/>
        </div>
        <div>
        <img src="${three}"/>
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
    <div class=${cd('banner')}>
        <span class=${cx('title-banner')}>
            Ready to order your project?                
        </span>
        <span class=${cd('hash-tag')}>
            Let's work together                    
        </span>
        
        
           
        <a class=${cx('explore')} href="/contact" >contact me</a>
              
    </div>


  
  

      
      <footer class=${cx('footer')}>
          <span class=${cx('footer-block')}>© 2020 Envidi</span>
          <span class=${cx('footer-block')}>Template author:  Envidi</span>
      </footer>

                          
</div>`
}

export default ProjectDetail