const api = "http://localhost:3000/myProject";

const postMethod = (data,callback)=>{
    
var options = {
    method : "POST",
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify(data),

 }
 
 fetch(api,options)
 .then((response)=>response.json())
 .then(callback)

}
export default postMethod