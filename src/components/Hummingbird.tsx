export default function Hummingbird({ className = "h-8 w-8", color = "#2C4A3B" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 30 C 18 25, 28 18, 42 6 C 38 19, 30 26, 19 29 L 44 28 C 34 35, 22 36, 13 32 C 11 37, 8 40, 4 43 C 6 38, 5 34, 5 30 Z"
        fill={color}
      />
    </svg>
  );
}
