export default function Title() {
  return (
    <div className="min-h-[438px] flex gap-8 md:gap-4 px-8 flex-col-reverse lg:flex-row items-center justify-center">
      <div className="flex items-center justify-center gap-4 flex-col w-full max-w-[500px] xl:max-w-[590px]">
        <h1 className="text-[#FF851A] text-[64px] md:text-[128px] ubuntu-mono-regular leading-none">
          WAH.su<span className="text-[32px] md:text-[48px]">(d0)</span>
        </h1>
        <p className="text-white ubuntu-mono-regular text-[24px] md:text-[32px] tracking-tighter md:tracking-normal leading-none">
          A tech non-company with a whole lot of wah—100% tech, 200% wah!
        </p>
      </div>
      <a
        href="https://wahs.wah.su"
        className="hover:-rotate-5 origin-center transition-transform  grid grid-cols-1 grid-rows-1 items-center justify-center flex-shrink-0 sm:flex-shrink-1 py-8 sm:py-14 md:py-0 md:-my-8 xl:my-0"
      >
        <img
          className="col-[1] row-[1] scale-150 max-h-[512px] xl:max-h-none md:scale-90 lg:scale-100 -z-10"
          src="/static/images/card-blur.png"
          alt=""
        ></img>
        <img
          className="col-[1] row-[1] scale-140 md:scale-85 lg:scale-95 max-h-[512px] xl:max-h-none"
          src="/static/images/card.png"
          alt="Sleeping red panda on the tree"
        ></img>
      </a>
    </div>
  );
}
