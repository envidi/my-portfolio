import Navigo from "navigo";
import { postImage } from "../components/Fetch";
const router = new Navigo("/", { linksSelector: "a", hash: true });

let effects = [];
let currentEffectOrder = 0;

let rootComponent = null;
let rootContainer = null;

let states = [];
let currentStateOrder = 0;

const debounce = (fn, timeout = 100) => {
  let timeId = null;

  return (...rest) => {
    if (timeId) clearTimeout(timeId);

    timeId = setTimeout(() => fn(...rest), timeout);
  };
};

const render = (component, container) => {
  container.innerHTML = component();

  rootComponent = component;
  rootContainer = container;

  effects.forEach((effect) => {
    effect.cb();
  });
};

const rerender = debounce(() => {
  currentStateOrder = 0;
  currentEffectOrder = 0;
  rootContainer.innerHTML = rootComponent();

  effects.forEach((effect) => {
    // shouldRunEffect = true khi không truyền deps hoặc deps khác nhau
    const shouldRunEffect =
      !effect.nextDeps ||
      effect.nextDeps?.some((dep, i) => {
        return dep !== effect?.prevDeps?.[i];
      });

    if (shouldRunEffect) {
      effect.cb();
    }
  });
});

const useState = (initialState) => {
  let state;
  let stateOrder = currentStateOrder;

  if (states[stateOrder] !== undefined) {
    state = states[stateOrder];
  } else {
    state = states[stateOrder] = initialState;
  }

  const updater = (newState) => {
    if (newState === undefined) {
      throw new Error("New state must not be undefined");
    }

    states[stateOrder] =
      typeof newState === "function" ? newState(states[stateOrder]) : newState;

    rerender();
  };

  currentStateOrder++;

  return [state, updater];
};

const useEffect = (cb, deps) => {
  let effectOrder = currentEffectOrder;

  if (!effects[effectOrder]) {
    effects.push({
      cb: cb,
      prevDeps: null,
      nextDeps: deps,
    });
  } else {
    effects[effectOrder] = {
      cb: cb,
      prevDeps: effects[effectOrder].nextDeps,
      nextDeps: deps,
    };
  }

  currentEffectOrder++;
};

router.on("/*", () => {}, {
  before(done, match) {
    states = [];
    currentStateOrder = 0;
    effects = [];
    currentEffectOrder = 0;

    done();
  },
});

const myLanguage = ["Vietnamese", "English"];
const myTechnology = [
  {
    name: "HTML , CSS",
    desc: "Hiểu rõ về position relative , absolue , pseudo class , flexbox, responsive, unit rem , em , animation CSS3",
  },
  {
    name: "Javascript",
    desc: "Hiểu và có thể sử dụng cơ bản các kiến thức liên quan đên array method , string method , operator , promise, async,await,api method,localStorage",
  },
  {
    name: "PHP",
    desc: "Hiểu và có thể sử dụng cơ bản các kiến thức liên quan đến array method , string method , operator , sql database , display data ",
  },
];

const anotherSkill = [
  {
    name: "Boostrap , Tailwind",
  },
  {
    name: "SASS,CSS3",
  },
  {
    name: "Git knowledge",
  },
];
const award = [
  {
    name: "Years Experience",
    number: "1+",
  },
  {
    name: "Completed Projects",
    number: "30+",
  },
  {
    name: "Happy Customers",
    number: "5+",
  },
  {
    name: "Honors and Awards",
    number: "1+",
  },
];
const myServices = [
  {
    name: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

  },
  {
    name: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    
  },
  {
    name: "Sound Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    
  },
  {
    name: "Game Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    
  },
  {
    name: "Advertising",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    
  },
];

const myProject =[
  {
    "name": "Comfy store",
    "desc": "COMFY Introduces New Store Format and Transforms them into Art Galleries",
    "startDate": "07/05/2023",
    "time": "4days",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692609518/Screenshot_203_bvmh71.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607834/Screenshot_245_mwgc7a.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607833/Screenshot_244_l0xkkz.png"
    ],
    "source": "https://github.com/envidi/Comfy-store.git",
    "link": " https://envidi.github.io/Comfy-store/",
    "id": 1
  },
  {
    "name": "Lamboghini Web",
    "desc": "Your doorway to unparalleled supercars, embodying luxury, innovation, and speed in one iconic brand.",
    "startDate": "01/04/2022",
    "time": "1months",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1687665546/portfolio/kkoytcojle3aozfw6pd5.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607832/Screenshot_246_y3hc6h.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607832/Screenshot_248_tzi34j.png"
    ],
    "source": "https://github.com/envidi/lamboWeb.git",
    "link": " https://envidi.github.io/lamboWeb/",
    "id": 2
  },
  {
    "name": "The Bands",
    "desc": "Your magical music world, where awesome bands from all over the world play their coolest tunes just for you! 🎶🎤",
    "startDate": "22/08/2021",
    "time": "1week",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692609640/Screenshot_241_nrorpy.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607832/Screenshot_250_gbbdxw.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692607832/Screenshot_249_vxiuwb.png"
    ],
    "source": "https://github.com/envidi/The-Bands.git",
    "link": "https://envidi.github.io/The-Bands/",
    "id": 3
  },
  {
    "name": "Cocktail Web",
    "desc": "Welcome to CocktailWeb, your go-to destination for all things cocktail-related. Discover an array of curated recipes.",
    "startDate": "15/10/2022",
    "time": "3 days",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692612813/Screenshot_254_bsjum5.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692612816/Screenshot_252_e4ccl9.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692612811/Screenshot_253_yxoffk.png"
    ],
    "source": "https://github.com/envidi/Cocktail-web.git",
    "link": "https://envidi.github.io/Cocktail-web/",
    "id": 4
  },  
  {
    "name": "Digital-O-Clock",
    "desc": " Your digital buddy that shows the time in numbers, just like magic! 🕒✨.",
    "startDate": "5/9/2021",
    "time": "2 days",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692615959/Screenshot_255_w58qug.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692615964/Screenshot_256_imld4v.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692615959/Screenshot_255_w58qug.png"
    ],
    "source": "https://github.com/envidi/Digital-O-clock.git",
    "link": "https://envidi.github.io/Digital-O-clock/",
    "id": 5
  },
  {
    "name": "Tea plus Web",
    "desc": "Website selling products related to drinks such as milk tea and sugary drinks, using MVC model to design.",
    "startDate": "10/3/2023",
    "time": "1 month",
    "skills": "HTML,CSS,JS,PHP",
    "role": "FE and BE member of team",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692679253/Screenshot_258_uqi7ih.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692679254/Screenshot_259_p0s9lp.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692679254/Screenshot_261_wths9y.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692679253/Screenshot_260_xjtseg.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1692679253/Screenshot_262_x3szn2.png"
    ],
    "source": "https://github.com/Namvv6523/Teaplus.git",
    "link": "http://drinking-envidi.infinityfreeapp.com/index.php",
    "id": 6
  },
   {
    "name": "Travel Web",
    "desc": "With HD video about travel to the beach and around the world.",
    "startDate": "27/8/2023",
    "time": "2 days",
    "skills": "HTML,CSS,React,Responsive",
    "role": "FE ",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1693230619/Screenshot_273_zhgarl.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1693230619/Screenshot_275_ahj8hr.png",
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1693230619/Screenshot_276_iy12jb.png",
   
    ],
    "source": "https://github.com/envidi/Travel-Web.git",
    "link": "https://travel-web-lime.vercel.app/",
    "id": 7
  }
]

const uploadFileCloudinary =async (files)=>{
  
  const CLOUD_NAME = "dsmy4ogdj";
  const PRESET_NAME = "envidi";
  const FOLDER_NAME = "portfolio"
  const urls = []
  const apiCloudinary = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append("upload_preset",PRESET_NAME)
  formData.append("folder",FOLDER_NAME)
  
  
    formData.append("file",files)
    const response = await postImage(apiCloudinary,formData)
    urls.push(response.secure_url)
    
  
  return urls
}
const historyData = {
  education : [
    {
      id : 1,
      name :"University of Toronto",
      sub : "Student",
      time : "jan 2018 - may 2020",
      desc : "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri",
      detail : "DIPLOME"
    },
    {
      id : 2,
      name : "Programming Course",
      sub : "Student",
      time : "jan 2016- apr 2017",
      desc : "Coursework - Git, WordPress, Javascript, iOS, Android.",
      detail : null
    },
    {
      id : 3,
      name : "Web developer courses",
      sub : "Student",
      time : "aug 2014 - oct 2015",
      desc : "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript",
      detail : "LICENCE"
    },
    {
      id : 4,
      name : "Academy of Art University",
      sub : "Student",
      time : "jan 2018 - may 2020",
      desc : "Ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.",
      detail : "CERTIFICATE"
    },
  ],
  work_history : [
    {
      id : 1,
      name :"Envato",
      sub : "Template Author",
      time : "jan 2018 - may 2020",
      desc : "Created Professional WordPress Themes & Templates for Personal and Creative Websites.",
      detail : null
    },
    {
      id : 2,
      name : "ABC Studio",
      sub : "Front-End Developer",
      time : "apr 2018 - aug 2019",
      desc : "Collaborate with creative and development teams on the execution of ideas.",
      detail : "RECOMMENDATION"
    },
    {
      id : 3,
      name : "Digital Web Studio",
      sub : "Senior Developer",
      time : "aug 2014 - oct 2015",
      desc : "Optimize your website and apps performance using latest technology.",
      detail : "RECOMMENDATION"
    },
    {
      id : 4,
      name : "SoftService company",
      sub : "UI Developer",
      time : "dec 2015 - jan 2016",
      desc : "Collaborate with creative and development teams on the execution of ideas.",
      detail : null
    },
  ]
}

export {
  render,
  useState,
  useEffect,
  router,
  myLanguage,
  myTechnology,
  anotherSkill,
  award,
  myServices,
  myProject,
  uploadFileCloudinary,
  historyData
};
