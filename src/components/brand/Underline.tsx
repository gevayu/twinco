/**
 * Hand-drawn marker underline — a deliberate "handmade" mark (one of the
 * design's intentional breaks from the clean grid). Drawn in brand yellow
 * by default. Place it absolutely under a word.
 */
export function Underline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M4 15.5C58 7.5 150 4.5 296 9.5C214 11 96 12.5 8 20.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
