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
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1687665363/portfolio/u2elt9j5kv3uhbuntwrw.png"
    ],
    "source": "https://github.com/envidi/Comfy-store.git",
    "link": " https://envidi.github.io/Comfy-store/",
    "id": 1
  },
  {
    "name": "Lamboghini Web",
    "desc": "LAMBORGHINI WORLD",
    "startDate": "01/04/2022",
    "time": "1months",
    "skills": "HTML,CSS,JS",
    "role": "fullstack",
    "image": [
      "https://res.cloudinary.com/dsmy4ogdj/image/upload/v1687665546/portfolio/kkoytcojle3aozfw6pd5.png"
    ],
    "source": "https://github.com/envidi/lamboWeb.git",
    "link": " https://envidi.github.io/lamboWeb/",
    "id": 2
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
  uploadFileCloudinary
};
