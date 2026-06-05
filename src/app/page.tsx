import Title from "@/components/title";
import GuideRoute from "@/components/guide-route";
import VisionCanvas from "@/components/vision-canvas";

export default function HomePage() {
  return (
    <main className="container min-h-screen">
      <section className="home">
        <Title />
        <VisionCanvas />
        <GuideRoute />
      </section>
    </main>
  );
}