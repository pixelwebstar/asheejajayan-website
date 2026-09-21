export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignClass}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">{eyebrow}</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">{title}</h2>
      {lede ? (
        <p className={`text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl ${align === "center" ? "mx-auto" : ""}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
