import flowApp from "../assets/projects/flow-app-landing.webp";
import instagram from "../assets/projects/instagram.webp";
import headphone_market from "../assets/projects/headphone.jpeg";
import hotels_interview from "../assets/projects/hotels.jpg";
import flowers_app from "../assets/projects/flowers.jpeg";
import w3School_starter from "../assets/projects/w3school.webp";
import FoxxyAppLanding from "../assets/projects/foxxy-app-landing.webp";
import Spotify from "../assets/projects/spotify.webp";
import Crypto from "../assets/projects/crypto.webp";
import Banks from "../assets/projects/banks.webp";
import Jupiter from "../assets/projects/jupiter.webp";
import JSQuestions from "../assets/projects/jsQuestions.webp"

import {SiStyledComponents} from "react-icons/si";

import {ReactComponent as Gatsby} from "../assets/svg/gatsbyjs.svg";
import {ReactComponent as Html5} from "../assets/svg/html-5.svg";
import {ReactComponent as JavaScript} from "../assets/svg/javascript.svg";
import {ReactComponent as Redux} from "../assets/svg/redux.svg";
import {ReactComponent as React} from "../assets/svg/react.svg";

export const ADVANTAGE = [
  {icon: <Html5 />, title: "HTML5 / CSS3"},
  {icon: <JavaScript />, title: "JS"},
  {icon: <React />, title: "REACT"},
  {icon: <Redux />, title: "REDUX"},
  {icon: <SiStyledComponents />, title: "STYLED COMPONENTS"},
  {icon: <Gatsby />, title: "GATSBY/NEXT"},
];

export const projects = [
  {
    id: 1,
    name: "Flow App Landing",
    image: flowApp,
    platform: "next.js",
    output: "http://demo1.i3o.ir/",
    src: "https://github.com/eisa-rezaei/Flow-App-Landing",
  },
  {
    id: 2,
    name: "Instagram App",
    image: instagram,
    platform: "gatsby.js",
    output: "https://demo3.i3o.ir/",
    src: "https://github.com/eisa-rezaei/Instagram",
  },
  {
    id: 3,
    name: "Headphone Market",
    image: headphone_market,
    platform: "react.js",
    output: "https://demo4.i3o.ir/",
    src: "https://github.com/eisa-rezaei/Headphone-market",
  },
  {
    id: 4,
    name: "Hotels Interview",
    image: hotels_interview,
    platform: "react.js",
    output: "https://demo7.i3o.ir",
    src: "https://github.com/eisa-rezaei/Hotels-interview",
  },
  {
    id: 5,
    name: "flowers app",
    image: flowers_app,
    platform: "react.js",
    output: "https://eisa-rezaei.github.io/Plants/",
    src: "https://github.com/eisa-rezaei/Plants",
  },
  {
    id: 6,
    name: "W3School langing App",
    image: w3School_starter,
    platform: "react.js",
    output: "https://eisa-rezaei.github.io/SideBar/",
    src: "https://github.com/eisa-rezaei/SideBar",
  },
  {
    id: 7,
    name: "Foxxy App landing",
    image: FoxxyAppLanding,
    platform: "react.js",
    output: "https://demo5.i3o.ir/",
    src: "https://github.com/eisa-rezaei/Flow-App-Landing",
  },
  {
    id: 8,
    name: "Spotify",
    image: Spotify,
    platform: "react.js",
    output: "https://demo6.i3o.ir/",
    src: "https://github.com/eisa-rezaei/Spotify",
  },
  {
    id: 9,
    name: "Banks",
    image: Banks,
    platform: "react.js",
    output: "https://demo10.i3o.ir/",
    src: "https://github.com/eisa-rezaei/bank",
  },
  {
    id: 10,
    name: "Crypto",
    image: Crypto,
    platform: "react.js",
    output: "https://demo11.i3o.ir/",
    src: "https://github.com/eisa-rezaei/crypto",
  },
  {
    id: 11,
    name: "Jupiter",
    image: Jupiter,
    platform: "react Typescript",
    output: "https://demo13.i3o.ir/",
    src: "https://github.com/eisa-rezaei/jupiter",
  },
  {
    id: 12,
    name: "Js Questions",
    image: JSQuestions,
    platform: "Markdown Book",
    output: "https://js.mariotek.ir/",
    src: "https://github.com/Mariotek/javascript-persian-interview-questions",
  },
];

export const Education = {
  first_part: [
    {
      title: "HTML5 / CSS LEARNING",
      caption: "start to thinking about how to make a Hello world! Website :] ",
    },
    {
      title: "TOSAEH PAYDAR SABALAN ",
      caption: "Started working as a internship front end developer ",
    },
    {
      title: "Creating simple projects",
      caption: "creating simple projects using jQuery and HTML/CSS",
    },
    {
      title: "Power Electrical Engineer",
      caption: "Started my university as a power Electrical engineer student",
    },
  ],
  secound_part: [
    {
      title: "Javidan company ",
      caption:
        "Working as a frontend developer doing template design, using React class components.",
    },
    {
      title: "learning REACT @^16.8",
      caption: " I've started to learn REACT Functional components.",
    },
    {
      title: "HAMRAHAN IDEA PARDAZ",
      caption:
        "Started working as a frontend React.js developer, using Functional components. ",
    },
    {
      title: "English Academy",
      caption:
        "start Learning English Language in Sharif academy as pre IELTS student.",
    },
    {
      title: "State management library",
      caption: "I've started to learning Redux for manage states.",
    },
  ],
  third_part: [
    {
      title: "Graduate from university",
      caption:
        "I've Graduated from university right now I am power Electrical Engineer.",
    },
    {
      title: "SSR & SSG",
      caption: "I've been trying to achieve Server Side Rendering.",
    },
    {
      title: "Freelance",
      caption: "I am working as freelance frontend Developer.",
    },
    {
      title: "PWA",
      caption:
        "I am trying to achieve knowledge about progressive web Application.",
    },
    {
      title: "TypeScript",
      caption: "Started to use TypeScript with react",
    },
  ],
};
