import type { BentoCardProps } from "./BentoCard";

export default function BentoCardSmall({
  color,
  logo,
  title,
  className,
  link
}: BentoCardProps) {
  if (link) {
    return (
      <a
        href={link}
        className={`block w-[114px] h-[114px] bg-[var(--color)] aspect-square ${className} p-2 rounded-xl flex flex-col gap-2 items-center justify-center border border-transparent hover:border-[#FF851A] transition-colors`}
        style={{ "--color": color } as React.CSSProperties}
      >
        <img src={logo} alt="" />
        <p className="ubuntu-mono-regular text-lg">{title}</p>
      </a>
    );
  }
  return (
    <div
      className={`block w-[114px] h-[114px] bg-[var(--color)] aspect-square ${className} p-2 rounded-xl flex flex-col gap-2 items-center justify-center`}
      style={{ "--color": color } as React.CSSProperties}
    >
      <img src={logo} alt="" />
      <p className="ubuntu-mono-regular text-lg">{title}</p>
    </div>
  );
}
