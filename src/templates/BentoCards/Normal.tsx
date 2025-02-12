import type { BentoCardProps } from "./BentoCard";

export default function BentoCardNormal({
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
        className={`block relative w-full h-full bg-[var(--color)] aspect-video ${className} overflow-hidden p-2 rounded-xl border border-transparent hover:border-[#FF851A] transition-colors`}
        style={{ "--color": color } as React.CSSProperties}
      >
        {image ? (
          <>
            <img
              className="absolute inset-0 object-cover object-center w-full h-full"
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
        <div className="flex flex-col gap-2">
          <div className="relative flex justify-end">
            <div className="ml-auto flex flex-col gap-1 items-center justify-center">
              <img src={logo} alt="" className="h-8" />
              <p className="ubuntu-mono-regular text-lg">{title}</p>
            </div>
          </div>
          <p className="relative sometype-mono-regular text-right">{description}</p>
        </div>
      </a>
    );
  }
  return (
    <div
      className={`block relative w-full h-full bg-[var(--color)] aspect-video ${className} overflow-hidden p-2 rounded-xl`}
      style={{ "--color": color } as React.CSSProperties}
    >
      {image ? (
        <>
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
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
      <div className="flex flex-col gap-2">
        <div className="relative flex justify-end">
          <div className="ml-auto flex flex-col gap-1 items-center justify-center">
            <img src={logo} alt="" className="h-8" />
            <p className="ubuntu-mono-regular text-lg">{title}</p>
          </div>
        </div>
        <p className="relative sometype-mono-regular text-right">{description}</p>
      </div>
    </div>
  );
}
