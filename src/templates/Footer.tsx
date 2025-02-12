interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={`bg-[#3b0d25] w-full h-full ${className} rounded-xl p-8 flex flex-col items-center justify-center ubuntu-regular`}
    >
      <div className="flex items-start flex-col gap-4">
        <a
          href="https://status.wah.su"
          className="flex flex-row items-center justify-center gap-3 hover:text-[#FF851A] transition-colors"
          target="_blank"
        >
          <div
            style={{ "--ping-color": "#6a7282" } as React.CSSProperties}
            className="ml-1 w-4 h-4 relative transition ease-in bg-[var(--ping-color)] rounded-full duration-400"
            id="status-icon"
          >
            <div
              id="status-icon-ping"
              className="invisible absolute w-4 h-4 top-0 left-0 scale-90 animate-ping transition ease-in bg-[var(--ping-color)] rounded-full duration-400"
            ></div>
          </div>
          <p id="status-text">...</p>
        </a>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <div className="inline h-6 w-6 bg-white rounded-full overflow-hidden">
              <img
                src="/static/images/Unsplash_Symbol.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <span>Photo by</span>{" "}
            <a
              href="https://unsplash.com/@lgtts"
              className="hover:text-[#FF851A] transition-colors"
            >
              Ilse Orsel
            </a>{" "}
            <span>on</span>{" "}
            <a
              href="https://unsplash.com"
              className="hover:text-[#FF851A] transition-colors"
            >
              Unsplash
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="https://wah.su/radiquum"
            className="flex gap-2 hover:text-[#FF851A] transition-colors"
          >
            <div className="h-6 w-6 bg-white rounded-full  overflow-hidden">
              <img
                src="/static/images/avatar_48.jpg"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <p>Run by @Radiquum</p>
          </a>
          <a
            href="https://github.com/wah-su"
            className="flex gap-2 hover:text-[#FF851A] transition-colors"
          >
            <div className="h-6 w-6 bg-white rounded-full">
              <img
                src="/static/images/GitHub_Invertocat_Dark.png"
                className="w-full h-full scale-80 object-contain"
                alt=""
              />
            </div>
            <p>Find us on GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
