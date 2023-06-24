import classNames from "classnames/bind";
import styles from "./list.module.scss";
import { useEffect,useState } from "../../../../utilities";
import { fetchApi,api_url, deleteMethod } from "../../../../components/Fetch";


const cx = classNames.bind(styles);


const List = ()=>{


    const [data, setData] = useState([]);

    const getData =  (api_url)=>{
        return new Promise(function(resolve,reject){
            const dataFetch =  fetchApi(api_url)
            resolve(dataFetch)
        })
    }

    useEffect(()=>{
       

        getData(api_url)
        .then((res)=>{
            setData(res)
        })
    },[])

    useEffect(()=>{
        const table = document.querySelector(`.${cx('table')}`);
        table.addEventListener("click",(e)=>{
            const clicked = e.target
            if(clicked.classList.contains(`${cx('delete-project')}`)){
                const id = clicked.dataset.id
                deleteMethod(id,()=>{
                    getData(api_url)
                    .then((res)=>{
                        setData(res)
                    })
                })
            }

        })

    })
    return `
        <div class=${cx('redirect')}>HOME/LIST</div>
        <table class=${cx('table')}>
            <thead>
                <th>Id</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Time</th>
                <th>Image</th>
                <th>StartDate</th>
                <th>Skills</th>
                <th>Website</th>
                <th>Reposity</th>
                <th>Role</th>
                <th colspan="2">Action</th>
            </thead>
            <tbody>

            ${data.map((dta,index)=>{
                const {id ,name,desc,image,source,link,time, startDate,role,skills} = dta
                
                return `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${desc}</td>
                <td>${time}</td>
                <td>
                    <img width="40" src=${image}>
                </td> 
                <td>${startDate}</td>
                <td>${skills}</td>
                <td>${link}</td>
                <td>${source}</td>
                <td>${role}</td>
                <td><a href="#/admin/edit/${id}">Edit</a></td>
                <td data-id=${id} class=${cx('delete-project')}>Delete</td>
            </tr>`
            }).join("")}
               
            </tbody>
        </table>
    `
}
export default List