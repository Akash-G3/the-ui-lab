import Navbar from "./navbar";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="relative flex items-center justify-center py-4">

      {/* Logo */}
      <div className="absolute left-14">
        <Logo />
      </div>

      {/* Centered Navbar */}
      <Navbar />

    </header>
  );
}