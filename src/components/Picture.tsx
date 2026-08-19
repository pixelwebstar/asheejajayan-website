interface PictureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export default function Picture({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority = "low",
}: PictureProps) {
  const avifSrc = src.endsWith(".webp") ? src.replace(/\.webp$/, ".avif") : null;

  return (
    <picture>
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
