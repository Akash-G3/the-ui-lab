import { useState } from "react";
import MasonryGrid from "../components/MansoryGrid";
import Lightbox from "../components/Lightbox";

const projects = [
  {
    title: "Project-1 Dribble",
    thumbnail: "https://cdn.dribbble.com/userupload/47430454/file/558da36729878cd440452e81a7d2e7d4.png?resize=752x&vertical=center",
    url: "https://akash-g3.github.io/Dribble-UI/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
  {
    title: "Project-2 Cynthia",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQFRBl01FiMfHg/feedshare-shrink_800/feedshare-shrink_800/0/1723785992787?e=1778112000&v=beta&t=ijOpzZFAK5ddzeZjNC7p2F2WkXuxLQj9oyfWenPkYXU",
    url: "https://akash-g3.github.io/CynthiaUgwuClone/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",

  },
  {
    title: "Project-3 Premier",
    thumbnail: "https://picsum.photos/300/352",
    url: "https://akash-g3.github.io/premier/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
   {
    title: "Project-4 Sherlock",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQHviU2JG6Ak6g/feedshare-shrink_800/feedshare-shrink_800/0/1719462813124?e=1778112000&v=beta&t=bugdyKEArx0DyK1XxVWKMxHy0TizU-W1XY9u31AHOlQ",
    url: "https://akash-g3.github.io/Trendline/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
   {
    title: "Project-CottonWeave",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQEz9_-_Rslt7Q/feedshare-shrink_800/feedshare-shrink_800/0/1718601397119?e=1778112000&v=beta&t=udFaPoMpTGM5qP5PAekZ9caekG9Abh9sJC8sYKYBK6A",
    url: "https://akash-g3.github.io/cotton-weave/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
   {
    title: "Project Shop",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQFPkdr6jc-ULQ/feedshare-shrink_800/feedshare-shrink_800/0/1718600270856?e=1778112000&v=beta&t=hX6gsA8W5TcPiZ5xfETSEE4UYFHIHSx1MUd94zeIRPM",
    url: "https://akash-g3.github.io/Shop-Jacket/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
   {
    title: "Project TheClassic",
    thumbnail: "https://picsum.photos/300/350",
    url: "https://example.com",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
  },
   {
    title: "Project Shoot",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQFu96xTo3BwRA/feedshare-shrink_800/feedshare-shrink_800/0/1718436971635?e=1778112000&v=beta&t=vxiFRO-I9Yi3Ke0zxtRk9jO4iH4EjEpnA0VlHklOrZQ",
    url: "https://akash-g3.github.io/Fashion_site_clone/",
    description: " A Better Way to Build Interfaces Build Fast • Ship Faster • Pixel Perfect • Code & Chill • Designed to Impress 🚀",
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