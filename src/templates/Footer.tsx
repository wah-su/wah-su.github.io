interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={`bg-[#3B0D25] w-full h-full ${className} rounded-xl p-8 flex items-center justify-center gap-8`}
    ></div>
  );
}
