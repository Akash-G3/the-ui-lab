import AboutBackground from "@/components/about-background";
import AboutUILab from "@/components/about-uilab";
import AboutAkash from "@/components/about-akash";
import AboutConnect from "@/components/about-connect";

export default function AboutPage() {
  return (
         <main className="relative min-h-screen bg-[#f7f7f4] overflow-hidden">
      
      {/* BACKGROUND */}
      <AboutBackground />

      {/* CONTENT */}
      <div className="relative z-10">
        <AboutUILab />
        <AboutAkash />
        <AboutConnect />

        {/* Hero section */}
        {/* About text */}
        {/* Social links */}
      </div>

    </main>
    
  );
}