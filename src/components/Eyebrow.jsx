export default function Eyebrow({ children, className = "" }) {
  return (
    <span className={`eyebrow ${className}`.trim()}>
      <svg
        className="eyebrow-tree"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M9.2 8.2c-1.1 3.3-1.4 6.3-1 9.8h1.6c-.4-3.6-.1-6.5 1-9.7l1.8 1.3.8-1.1-2.1-1.6c.1-.3.2-.6.4-.9l3.5 1.4.5-1.2-3.3-1.4 4.1-.9-.3-1.3-5 .9 3.2-3.2-1-1-4 4.1L7.8.2 6.7.9l1.4 4-4.4-2.4L3 3.7l4.7 2.6-5 .2.1 1.3 5.3-.2-3.7 2.8.8 1.1 4-3.3Z" />
        <circle cx="9.7" cy="7.1" r=".7" />
        <circle cx="11.1" cy="7.4" r=".7" />
      </svg>
      <span className="eyebrow-copy">{children}</span>
    </span>
  );
}
