import Img from "@/components/Img";

export default function PhoneMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-zinc-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden">
          <Img
            src={src}
            alt={alt}
            width={268}
            height={580}
            className="w-full h-auto object-cover"
            sizes="280px"
          />
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-zinc-600 rounded-full" />
      </div>
    </div>
  );
}
