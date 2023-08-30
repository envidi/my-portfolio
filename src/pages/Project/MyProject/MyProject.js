import classNames from "classnames/bind";
import Myservices from "../../../components/Main/MyServices";
import styles from "../../../components/Main/main.module.scss";
import stylesService from "../../../components/Main/MyServices/myservice.module.scss";
import stylesProject from "./MyProject.module.scss";
import { useEffect,myProject,useState } from "../../../utilities";
// import postMethod from "./postMethod";
import deleteMethod from "./deleteMethod";
import styleDetail from "../ProjectDetail/ProjectDetail.module.scss";


const cx = classNames.bind(styles);
const cs = classNames.bind(stylesProject);
const cv = classNames.bind(stylesService);
const cd = classNames.bind(styleDetail)

const MyProject =(column)=>{
    
    const fetchData = ()=>{
        fetch("http://localhost:3000/myProject")
        .then((response)=>{
         return response.json()
        })
        .then((data)=>{
         setData(data);
        })  
    }
   

    
    const [data,setData] = useState(myProject);
    
    // useEffect(()=>{
        
    //     fetchData()
                  
     
    // },[])

    useEffect(()=>{
        const infoHidden = document.querySelectorAll(`.${cs("info-hidden")}`);
        const myProjectBlocks = document.querySelectorAll(`.${cs("my-project-block")}`);

        myProjectBlocks.forEach((myProjectBlock,index)=>{
            myProjectBlock.addEventListener("mouseover",(e)=>{
                infoHidden[index].classList.add(`${cs('active-info-hidden')}`);

            })

            myProjectBlock.addEventListener("mouseout",(e)=>{
                infoHidden[index].classList.remove(`${cs('active-info-hidden')}`);
                
            })
        })
        

        const myFormProject = document.querySelector(`.${cs(`my-project-${column.data.id}`)}`);
        
        myFormProject.addEventListener("click",(e)=>{
            const clicked = e.target;
            if(clicked.classList.contains(`${cs('source')}`)){
                const hrefSource = clicked.getAttribute('href');
                window.location.href = hrefSource
            }
            else if(clicked.classList.contains(`${cs('link')}`)){
                const hrefSource = clicked.getAttribute('href');
                window.location.href = hrefSource
            }
            else if(clicked.classList.contains(`${cs('remove')}`)){
                const id = clicked.dataset.id;
                deleteMethod(id,function(){
                    fetchData()
                })

            }
        })


       



      
    })
                                      
    

    return `<div class=${cx('main')}>
                <div class=${cs('contain-form-project')}>
                  
                </div>  
                
                <div class=${cs(`my-project-${column.data.id || 2}`)} >
                

                ${data.map((pro)=>{
                    const {id,name,image,desc,link,source} = pro;
                    const [one, ...rest] = image
                    return `<div class=${cs("my-project-block")}>
                    <img src=${one} />
                    <div class=${cs("info-hidden")}>
                        <div class=${cs('info-hidden__title')}>${name}</div>
                        <div class=${cs('info-hidden__desc')}>${desc}</div>
                        <a href=${`/projectDetail/${id}`} class=${cd('projectDetail-read-more')}>
                            READ MORE <i class="fa-solid fa-chevron-right"></i>
                        </a>
                        
                    </div>
                </div>`
                }).join("")}
                    
                   
                 </div>
    
                    
                    <footer class=${cx('footer')}>
                        <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
                        <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
                    </footer>

                                        
            </div>`;
}
export default MyProject;