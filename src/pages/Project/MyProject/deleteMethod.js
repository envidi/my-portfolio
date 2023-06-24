
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
export default deleteMethod