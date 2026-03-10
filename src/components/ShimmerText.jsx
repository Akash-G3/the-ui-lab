export default function ShimmerText() {
  const text = `A Small lab of Interfaces
where ideas, learning 
and experimentation
turn into a real UI`;

  return (
    <h1 className="text-3xl leading-relaxed max-w-xl text-gray-400">
      {text.split("").map((letter, index) => {
        if (letter === "\n") {
          return <br key={index} />;
        }

        return (
          <span
            key={index}
            className="inline-block shimmer-letter"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </h1>
  );
}