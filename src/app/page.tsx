import Title from "@/components/title";
import GuideRoute from "@/components/guide-route";
import VisionCanvas from "@/components/vision-canvas";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="home">
        <div className="md:h-[37.8vh] h-[18vh]">
        <Title />
        </div>
        <VisionCanvas />
        <GuideRoute />
      </section>
    </main>
  );
}