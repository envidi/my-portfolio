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

const myLanguage = ["English"];
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
  {
    name: "Reactjs",
    desc: "Hiểu và có thể sử dụng cơ bản các kiến thức Reactjs như useContext,useReducer,... ",
  },
  {
    name: "AngularJs",
    desc: "Hiểu và có thể sử dụng cơ bản các kiến thức AngularJs như Services, Observerble,pipe,... ",
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
    name: "Năm kinh nghiệm",
    number: "1+",
  },
  {
    name: "Completed Projects",
    number: "30+",
  },
  {
    name: "Khách hàng",
    number: "2+",
  },
  {
    name: "Giải thưởng",
    number: "1+",
  },
];
const myServices = [
  {
    name: "Web Development",
    desc: "Chuyển đổi file giao diện photoshop sang HTML,CSS and JavaScript,Reactjs",

  },
  {
    name: "Design UI/UX",
    desc: "Có thể thiết kế giao diện trên photoshop hoặc figma",

  },
];

const myProject =[
  {
    "name": "Comfy store",
    "desc": "Sử dụng vanillaJs , HTML,CSS , và các thư viện để làm hiệu ứng animation",
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
    "desc": "Trang web lấy ý tưởng từ site Lamboghini , dùng Vanilla Javascript để tạo hiệu ứng animation !",
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
    "desc": "Sử dụng HTML , CSS để xây dựng gồm kiến thức cơ bản của Html,Css và Responsive! 🎶🎤",
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
    "desc": "CocktailWeb, dùng Vanilla Js để tạo các chức năng như tìm kiếm và xem chi tiết từng cocktail",
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
    "desc": "Sử dụng HTML , CSS để tạo giao diện , dùng Vanilla JS đê viết logic cho Clock , thay đổi sáng và đêm theo thời gian 🕒✨.",
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
    "desc": "Sử dụng PHP core để viết chức năng cho web như đặt hàng, thêm sửa xóa sản phẩm ",
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
    "desc": "Sử dụng HTML,CSS và Reactjs để hoàn thiện sản phẩm .Sử dụng thư viện animation để tạo effect.",
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
  },
  {
   "name": "Quiz App",
   "desc": "Quiz App gồm các câu hỏi liên quan đến kiến thức cơ bản của React",
   "startDate": "12/10/2023",
   "time": "2 days",
   "skills": "HTML,CSS,React",
   "role": "FE ",
   "image": [
     "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1699440353/Screenshot_15_oojtzb.png",
     "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1699440352/Screenshot_16_mykclk.png",
     "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1699440352/Screenshot_13_odyzy1.png",
  
   ],
   "source": "https://github.com/envidi/Quiz-app.git",
   "link": "https://quiz-app-silk-xi.vercel.app/",
   "id": 8
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
      name :"Cao đẳng FPT ",
      sub : "Sinh viên",
      time : "jan 2022 - may 2024",
      desc : "Đang học tại chuyên ngành Web Front-end ",
      detail : "Xem chi tiết"
    },
    {
      id : 2,
      name : "Khóa học lập trình",
      sub : "Sinh viên",
      time : "jan 2023- oct 2023",
      desc : "Có kiến thức căn bản và làm việc với git , javascript căn bản và nâng cao, Reactjs cơ bản, Java cơ bản và C++ cơ bản",
      detail : null
    },
    {
      id : 3,
      name : "Khóa học lập trình web",
      sub : "Sinh viên",
      time : "jan 2023 - oct 2023",
      desc : "Có thể chuyển đổi file photoshop sang html css, javascript",
    },
    {
      id : 4,
      name : "Khóa học về photoshop",
      sub : "Sinh viên",
      time : "jan 2022 - may 2022",
      desc : "Có kiến thức cơ bản về UI/UX, photoshop căn bản",
    },
  ],
  work_history : [
    {
      id : 1,
      name :"Dự án 1",
      sub : "Member",
      time : "nov 2022 - dec 2022",
      desc : "Website bán trà sữa sử dụng PHP và sql , làm việc với git",
      detail : "Chi tiết trong CV"
    },
    {
      id : 2,
      name : "Dự án mẫu",
      sub : "Front-End Developer",
      time : "sep 2022 - oct 2022",
      desc : "Sử dụng PHP và SQL để làm trang web bán hàng gia dụng",
      detail : "Chi tiết trong CV"
    },
    // {
    //   id : 3,
    //   name : "Digital Web Studio",
    //   sub : "Senior Developer",
    //   time : "aug 2014 - oct 2015",
    //   desc : "Optimize your website and apps performance using latest technology.",
    //   detail : "RECOMMENDATION"
    // },
    // {
    //   id : 4,
    //   name : "SoftService company",
    //   sub : "UI Developer",
    //   time : "dec 2015 - jan 2016",
    //   desc : "Collaborate with creative and development teams on the execution of ideas.",
    //   detail : null
    // },
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
