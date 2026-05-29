import ExhibitTitle from "@/components/exhibit-title";
import ExhibitionShowcase from "@/components/exhibition-showcase";

export default function ExhibitionPage() {
  return (
    <section className="container">
      <div className="">
        <ExhibitTitle />
        <ExhibitionShowcase />
      </div>
    </section>
  );
}