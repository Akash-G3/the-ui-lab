import Title from "@/components/title";
import HeroText from "@/components/heroText";

export default function HomePage() {
  return (
    <main className="container min-h-screen py-10">
      <section className="space-y-4">
        <Title />
        <HeroText />
      </section>
    </main>
  );
}