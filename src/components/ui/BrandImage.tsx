import Image from "next/image";

/**
 * Premium brand image — transforms any photo into the strict Twinco brand
 * palette using CSS blend modes layered over the image. Render inside a sized,
 * `relative` parent (or pass a sizing className); the image fills it.
 */
export function BrandImage({
  src,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#021879] ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale-[0.3] contrast-105 transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />
      {/* Original navy duotone tint, restored at ~30% strength */}
      <div className="absolute inset-0 bg-[#021879] mix-blend-multiply opacity-25 transition-opacity duration-700 group-hover:opacity-15" />
      {/* Azure highlight lift, ~30% */}
      <div className="absolute inset-0 bg-[#147BFE] mix-blend-screen opacity-15 transition-opacity duration-700 group-hover:opacity-25" />
      {/* Light azure gradient sheen, 2x stronger */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#147BFE]/50 via-transparent to-transparent" />
      {/* Soft navy vignette, ~30% */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021879]/30 to-transparent" />
    </div>
  );
}
