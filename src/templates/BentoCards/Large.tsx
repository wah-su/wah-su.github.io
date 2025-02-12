import type { BentoCardProps } from "./BentoCard";

export default function BentoCardLarge({
  color,
  image,
  logo,
  title,
  description,
  className,
  link,
}: BentoCardProps) {
  if (link) {
    return (
      <a
        href={link}
        className={`block relative bg-[var(--color)] row-span-3 col-span-2 ${className} overflow-hidden p-2 gap-4 rounded-xl border flex flex-col items-end justify-center border-transparent hover:border-[#FF851A] transition-colors`}
        style={{ "--color": color } as React.CSSProperties}
      >
        {image ? (
          <>
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={image}
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color)/0] to-[var(--color)] to-[75%] "
              style={{ "--color": color } as React.CSSProperties}
            ></div>
          </>
        ) : (
          ""
        )}
        <div className="relative flex justify-end">
          <div className="ml-auto flex flex-col gap-1 items-center justify-center">
            <img src={logo} alt="" className="h-12" />
            <p className="ubuntu-mono-regular text-lg">{title}</p>
          </div>
        </div>
        <p className="relative sometype-mono-regular max-w-[60%] text-right ">
          {description}
        </p>
      </a>
    );
  }
  return (
    <div
      className={`block relative bg-[var(--color)] row-span-3 col-span-2 ${className} overflow-hidden p-2 gap-4 rounded-xl border flex flex-col items-end justify-center border-transparent hover:border-[#FF851A] transition-colors`}
      style={{ "--color": color } as React.CSSProperties}
    >
      {image ? (
        <>
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={image}
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--color)/0] to-[var(--color)] to-[75%] "
            style={{ "--color": color } as React.CSSProperties}
          ></div>
        </>
      ) : (
        ""
      )}
      <div className="relative flex justify-end">
        <div className="ml-auto flex flex-col gap-1 items-center justify-center">
          <img src={logo} alt="" className="h-12" />
          <p className="ubuntu-mono-regular text-lg">{title}</p>
        </div>
      </div>
      <p className="relative sometype-mono-regular max-w-[60%] text-right  ">
        {description}
      </p>
    </div>
  );
}
