
import styles from "./ProjectEdit.module.scss";
import classNames from "classnames/bind";
import stylesMain from "../../../components/Main/main.module.scss";
import putCourse from "./editMethod";
import { useEffect,useState } from "../../../utilities";
const cs = classNames.bind(styles)
const cx = classNames.bind(stylesMain);
const api = "http://localhost:3000/myProject/"

const ProjectEdit = ({data : {id}})=>{

    const [edit,setEdit] = useState({})
    const { name , desc , link , source ,image} = edit
    
    useEffect(()=>{
        fetch(`${api}${id}`)
        .then(response=>response.json())
        .then((data)=>{
            setEdit(data)
        })
    },[])
    useEffect(()=>{
        const formEdit = document.querySelector(`.${cs('form-edit')}`);
        formEdit.addEventListener("submit",function(e){
            e.preventDefault();
            let name = document.querySelector(`.${cs('name-input')}`).value;
            name = name != "" ? name : "null"
            let desc = document.querySelector(`.${cs('desc-input')}`).value;
            desc = desc != "" ? desc : "Lorem ipsum"
            const source = document.querySelector(`.${cs('source-input')}`).value;
            const link = document.querySelector(`.${cs('link-input')}`).value;
            const image = document.querySelector(`.${cs('img-input')}`).value;
            const newData = {
                name,
                desc,
                source,
                link,
                image,

            }
            putCourse(newData,id)

        })
    })
    return `<div class=${cx('main')}>
                <div class=${cs('contain-form-project')}>
                    <form class=${cs('form-edit')}> 
                        <label>name</label>
                        <input class=${cs('name-input')} type="text"  value="${name}" placeholder="name-input" />
                        <label>Description</label>
                        <input class=${cs('desc-input')} type="text"  value="${desc}"  placeholder="desc-input" />
                        <label>Image</label>
                        <input class=${cs('img-input')} type="text"  value="${name}" placeholder="img-input" />
                        <img src="${image}"/>
                        <label>Source</label>
                        <input class=${cs('source-input')} type="text"  value="${source}"  placeholder="source-input"/>
                        <label>Link</label>
                        <input class=${cs('link-input')} type="text"  value="${link}" placeholder="link-input" />
                    <button type="submit" class=${cs('submit-form')}>
                            Submit
                    </button>
                    </form>
                </div>  
    
       

        
        <footer class=${cx('footer')}>
            <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
            <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
        </footer>

                            
</div>`;
}
export default ProjectEdit

