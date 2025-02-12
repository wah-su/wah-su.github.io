export default function Title() {
  return (
    <div className=" min-h-[438px] flex gap-4 px-8 flex-col-reverse xl:flex-row items-center justify-center">
      <div className="flex items-center justify-center gap-4 flex-col max-w-[590px]">
        <h1 className="text-[#FF851A] text-[64px] md:text-[128px] ubuntu-mono-regular leading-none">
          WAH.su<span className="text-[32px] md:text-[48px]">(d0)</span>
        </h1>
        <p className="text-white ubuntu-mono-regular text-[24px] md:text-[32px] tracking-tighter md:tracking-normal leading-none">
          A tech non-company with a whole lot of wah—100% tech, 100%
          non-company, 200% wah!
        </p>
      </div>
      <a href="https://wahs.wah.su" className="hover:-rotate-5 origin-center transition-transform  grid grid-cols-1 grid-rows-1 flex-shrink-0 sm:flex-shrink-1 py-14 md:py-0">
        <img className="col-[1] row-[1] scale-150 max-h-[512px] xl:max-h-none md:scale-100 -z-10" src="/static/images/card-blur.png" alt=""></img>
        <img className="col-[1] row-[1] scale-140  md:scale-95 lg:scale-90 xl:scale-95 xl:mt-2 max-h-[512px] xl:max-h-none" src="/static/images/card.png" alt="Sleeping red panda on the tree"></img>
      </a>
    </div>
  );
}
