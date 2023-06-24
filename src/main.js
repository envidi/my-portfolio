import { render,router } from "./utilities";
import HomePage from "./pages/HomePage/HomePage";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact.js";
import Admin from "./pages/Admin/Admin";
import Authen from "./pages/Authen";


const isEdit = false

const app = document.querySelector("#app");

router.on("/admin/*", () => {}, {
   before(next) {
       const { user } = JSON.parse(localStorage.getItem("user")) || {};
       if (!user) return (window.location.href = "/");
       if (user && user.id != "1") return (window.location.href = "/login");
       next();
   },
});

router.on("/", function(){
   return render(HomePage,app)
});
router.on("/project/:id",(data)=> render(function(){
   return Project(data,false)
},app)
);
router.on("/projectEdit/:id",(data)=> render(function(){
   return Project(data,true)
},app)
);
router.on("/contact",function(){
   return render(Contact,app)
})
router.on("/admin",function(){
   return render(Admin,app)
});
router.on("/login",function(){
   return render(function(){
      return  Authen("signin")
   },app)
});
router.on("/signup",function(){
   return render(function(){
     return Authen("signup")
   },app)
});
router.on("/admin/add",function(){
   return render(function(){
      return Admin("add")
   },app)
});
router.on("/admin/edit/:id",function(data){
   return render(function(){
      
      return Admin("edit",data)
   },app)
});


router.resolve()


