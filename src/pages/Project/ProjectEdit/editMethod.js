import { router } from "../../../utilities";

const api = "http://localhost:3000/myProject";


function putCourse(data,id){
    var options = {
        method :"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)

    }
    fetch(api + `/${id}`,options)
    .then((response)=>{
        return response.json()
    })
    .then(()=>{
        router.navigate("/product/3")
    })
  
}
export default putCourse