import { useEffect, useState } from "react";

export default function ShimmerTypingText() {
  const text = `A Small lab of Interfaces
where ideas, learning 
and experimentation
turn into a real UI`;

  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-3xl md:text-2xl font-semibold leading-relaxed font-mono">
      <span
        className={`whitespace-pre-line ${
          typingDone ? "shimmer-text" : ""
        } bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent`}
      >
        {displayText}
      </span>

      <span className="cursor ml-1">|</span>
    </h1>
  );
}