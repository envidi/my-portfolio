

const api_url = "http://localhost:3000/myProject";
const api_users = "http://localhost:3000/users";
const signin = "http://localhost:3000/signin";
import { router } from "../../utilities";

const fetchApi = async (api_url)=>{
    try {
        const res = await fetch(api_url)

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const postMethod = (data,callback)=>{
    var options = {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data),
    
     }
     
     fetch(api_url,options)
     .then((response)=>response.json())
     .then(callback)
    
    }
    const postImage =async (api,data,callback)=>{
       
        const res =await fetch(`${api}`, {
            method: 'POST',
            body: data
          })
          const dataImage = res.json()
          return dataImage
      
        
        }
    const postUser = (data,callback)=>{
    
        var options = {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data),
        
         }
         let error 
         fetch(api_users,options)
         .then((response)=>{
            console.log(response)
            // if(!response.ok){
            //     throw new Error(`Something went wrong ${response.status} ${response.statusText}`)
            // }
            return response.json()
         })
         .then(callback)
         .catch((err)=>{
            console.log(err)
         })
        
        
        }
        const SignIn = (data,callback)=>{
    
            var options = {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(data),
            
             }
             
             fetch(signin,options)
             .then((response)=>response.json())
             .then(callback)
            
            }
    function deleteMethod(id,callback){
        var options = {
            method : "DELETE",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        }
        fetch("http://localhost:3000/myProject/" + `/${id}`,options)
        .then((response)=>{
            return response.json()
        })
        .then(callback)
    }
    function putCourse(data,id){
        var options = {
            method :"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
    
        }
        fetch(api_url + `/${id}`,options)
        .then((response)=>{
            return response.json()
        })
        .then(()=>{
            router.navigate("/admin")
        })
      
    }
export { fetchApi,api_url,postMethod,deleteMethod,putCourse ,postUser,SignIn,postImage}