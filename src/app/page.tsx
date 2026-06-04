import Title from "@/components/title";
// import HeroText from "@/components/heroText";
import HeroVid from "@/components/heroVid";
// import AfterSec from "@/components/afterSec";
// import Miniature from "@/components/miniature";
import ExhibitionRoute from "@/components/path";

export default function HomePage() {
  return (
    <main className="container min-h-screen">
      <section className="home">
        <Title />
        {/* <HeroText /> */}
        <HeroVid />
        {/* <AfterSec /> */}
        {/* <Miniature /> */}
        <ExhibitionRoute />
      </section>
    </main>
  );
}