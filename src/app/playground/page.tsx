// Import components you want to test here
import HeroVid from "@/components/heroVid";

// Playground page
// A safe space to experiment with UI components.
export default function PlaygroundPage() {

  // Return page UI
  return (

    // Main page wrapper
    // Usually controls page spacing/layout.
    <main className="container py-6">

      {/* Component testing area */}
      <section>
        <HeroVid />
      </section>
    </main>
  );
}