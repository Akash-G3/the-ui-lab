import Navbar from "./components/Navbar";
import Home from "./sections/home.jsx";
import Exhibition from "./sections/exhibition.jsx";
import About from "./sections/About.jsx";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#ebedec]">  {/* bg and text will be global theme for the whole page. */}
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
