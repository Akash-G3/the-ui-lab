import ShimmerText from "../components/ShimmerText"

export default function Home() {
  return (
    <section id="home" className="h-screen flex">
      
      <div className="heroText flex-2">
        <div className="UItext">
        <h1 className="text-[5.5vw] leading-none font-bold m-16">The UI Lab</h1>
        {/* <h1 className="text-[9.5vw] leading-none font-bold ml-21">Lab</h1> */}
        </div>
         <div className="shimmer mt-8 ml-22">
           {/* Shimmer text animation */}
        <ShimmerText />
        </div>
      </div>

      <div className="imageSection flex-1 pt-6">
     
      </div>

    </section>
  )
}