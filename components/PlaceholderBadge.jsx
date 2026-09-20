export default function PlaceholderBadge({ className = "" }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[0.65rem] tracking-[0.14em] uppercase bg-[var(--ink)] text-[var(--plaster)] ${className}`}
    >
      Image provisoire
    </span>
  );
}
