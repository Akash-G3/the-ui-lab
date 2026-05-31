import Navbar from "./navbar";
import Logo from "./logo";

export default function Header() {
  return (
    // <header className="sticky top-0 z-50 bg-white/95 relative flex items-center justify-center pt-4"> //  use this when u want the navbar to be sticky.
    <header className="relative flex items-center justify-center pt-4 bg-[#f6f3ee]  bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.12),transparent_30%)]">

      {/* Logo */}
      <div className="absolute left-14">
        <Logo />
      </div>

      {/* Centered Navbar */}
      <Navbar />

    </header>
  );
}





// import Navbar from "./navbar";
// import Logo from "./logo";

// export default function Header() {
//   return (
//     <header className="relative flex items-center justify-center overflow-hidden bg-[#f6f3ee] pt-4">

//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.07]"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               to right,
//               rgba(0,0,0,0.06) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               to bottom,
//               rgba(0,0,0,0.06) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "58px 58px",
//         }}
//       />

//       {/* Ambient Glow */}
//       <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-[120px]" />

//       {/* Left Peach Mesh */}
//       <div className="absolute -left-24 top-0 h-[260px] w-[260px] rounded-full bg-orange-200/20 blur-[100px]" />

//       {/* Right Neutral Mesh */}
//       <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-neutral-300/20 blur-[90px]" />

//       {/* Noise */}
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.03]
//           mix-blend-multiply
//           [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
//         "
//       />

//       {/* subtle bottom divider */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />

//       {/* Logo */}
//       <div className="absolute left-14 z-10">
//         <Logo />
//       </div>

//       {/* Navbar */}
//       <div className="relative z-10">
//         <Navbar />
//       </div>

//     </header>
//   );
// }