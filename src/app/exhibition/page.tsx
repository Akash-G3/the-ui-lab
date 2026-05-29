import ExhibitTitle from "@/components/exhibit-title";
import ExhibitionShowcase from "@/components/exhibition-showcase";
import ExhibitionClosing from "../../components/exhibition-closing";

export default function ExhibitionPage() {
  return (
    <section className="container">
      <div className="">
        <ExhibitTitle />
        <ExhibitionShowcase />
        <ExhibitionClosing />
      </div>
    </section>
  );
}