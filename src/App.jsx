import Navbar from "./components/Navbar";
import './index.css'
import Home from "./sections/home.jsx";
import Exhibition from "./sections/exhibition.jsx";
import About from "./sections/About.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f4f6,_#e5e7eb)]">  {/* bg and text will be global theme for the whole page. */}
    <Navbar />
    <Home />
    <Exhibition />
    <About />
    {/* <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exhibition" element={<Exhibition />} />
    </Routes> */}
    </div>
  )
}

export default App
