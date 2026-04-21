import { useState } from "react";
import MasonryGrid from "../components/MansoryGrid";
import Lightbox from "../components/Lightbox";
import ObysImg from "../assets/images/obys.png"
import DribbleImg from "../assets/images/dribble.png"
import CynthiaImg from "../assets/images/cynthia.png"
import PrimierImg from "../assets/images/primier.png"
import SherlockImg from "../assets/images/sherlock.png"
import CottonImg from "../assets/images/cotton-weave.png"
import ShopImg from "../assets/images/shop.png"
import FashionImg from "../assets/images/fashion.png"
import ClassicImg from "../assets/images/classic.png"

const projects = [
   {
    title: "Project-0 Obys-Agency",
    thumbnail: ObysImg,
    url: "https://akash-g3.github.io/Obys-Agency/",
    description: "This a great website clone project with modern UI and great animations ... It takes a while to complete it I have used - HTML CSS JAVASCRIPT and libraries - GSAP Locomotive SheryJS, My best Work.",
  },
  {
    title: "Project-1 Dribble",
    thumbnail: DribbleImg,
    url: "https://akash-g3.github.io/Dribble-UI/",
    description: "The user interface design of Dribble website Most of the thing is done using HTML and CSS for a very little part I used JavaScript ",
  },
  {
    title: "Project-2 Cynthia",
    thumbnail: CynthiaImg,
    url: "https://akash-g3.github.io/CynthiaUgwuClone/",
    description: "This project is a UI and Animation clone of Cynthia Ugwu's portfolio. Its a designers portfolio website programmed with great animations using HTML CSS JavaScript and  animation libraries GSAP and Locomotive .",

  },
  {
    title: "Project-3 Premier",
    thumbnail: PrimierImg,
    url: "https://akash-g3.github.io/premier/",
    description: "Premier is a fashion model theme based website .. The website is modern and professional in UI with multiples pages and animations on selected pages with customize layout navigation and footers Completed the programming of this website and made it live ",
  },
   {
    title: "Project-4 Sherlock",
    thumbnail: SherlockImg,
    url: "https://akash-g3.github.io/Trendline/",
    description: "Sherlock is a website project , single page fully responsive to mobile devices too, It has modern UI and included scrolling to text and images to.",
  },
   {
    title: "Project-CottonWeave",
    thumbnail: CottonImg,
    url: "https://akash-g3.github.io/cotton-weave/",
    description: "A cotton weave is a website design page of a cotton-made cloths this is the most clean and beautiful design and perfectly responsive to Mobile devices as well.",
  },
   {
    title: "Project Shop",
    thumbnail: ShopImg, 
    url: "https://akash-g3.github.io/Shop-Jacket/",
    description: "This is single a page website design , which I made as a project assignment from my course and under guidance of Sheriyans Coding School",
  },
   {
    title: "Project TheClassic",
    thumbnail: ClassicImg,
    url: "https://akash-g3.github.io/BuyPet-Webpage/",
    description: "This website is the first  project of my development and learning period ,I made this website under the course of Dr.Anjela Yu .",
  },
   {
    title: "Project Shoot",
    thumbnail: FashionImg,
    description: "The webpage created using HTML and CSS . This project is the beginner level of Website development completed by me,",
  },

];

export default function Exhibition() {
  const [selected, setSelected] = useState(null);

  return (
  <>
  <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight text-gray-900 leading-tight">Exhibition</h1>
    <div id="exhibition" className="grid">
      {projects.map((item, i) => (
        <div
          className="card"
          key={i}
          onClick={() => setSelected(item)}
        >
          <img src={item.thumbnail} alt={item.title} />

          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
   </>

  );
}