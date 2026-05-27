import Navbar from "./navbar";
import Logo from "./logo";

export default function Header() {
  return (
    // <header className="sticky top-0 z-50 bg-white/95 relative flex items-center justify-center pt-4"> //  use this when u want the navbar to be sticky.
    <header className="relative flex items-center justify-center pt-4">

      {/* Logo */}
      <div className="absolute left-14">
        <Logo />
      </div>

      {/* Centered Navbar */}
      <Navbar />

    </header>
  );
}