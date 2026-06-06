import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { BrandImage } from "@/components/ui/BrandImage";
import { BrandVideo } from "@/components/ui/BrandVideo";
import { Underline } from "@/components/brand/Underline";

function OpeningVisual() {
  return (
    <Reveal delay={0.2} className="lg:col-span-5 relative h-[500px]">
      <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl group">
        <BrandImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-[#F4F9FF] z-10 animate-float">
        <BrandVideo
          src="/0_Business_Meeting_1280x720.mp4"
          className="w-full h-full"
        />
      </div>
    </Reveal>
  );
}

export function Opening() {
  return (
    <section
      id="opening"
      className="py-20 md:py-28 flex justify-center"
      style={{
        background: "linear-gradient(180deg, #96C4FF 0%, #F4F9FF 100%)",
      }}
    >
      <div className="relative w-[96%] max-w-[1760px] mx-auto lg:h-[80vh] flex flex-col justify-center rounded-[2rem] md:rounded-[3rem] bg-[#F4F9FF] shadow-2xl overflow-hidden ring-1 ring-[#147BFE]/15">
        {/* Signature growth-wave, watermarked across the vertical center */}
        <Image
          src="/brand/wave-hero.png"
          alt=""
          width={2000}
          height={1066}
          sizes="90vw"
          className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-auto opacity-15"
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center p-8 md:p-14 lg:p-20">
          <div className="lg:col-span-7">
            <Reveal
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#021879] leading-tight mb-10 tracking-tight"
            >
              Why does Twinco succeed where{" "}
              <span className="relative inline-block text-[#147BFE] italic">
                95%
                <Underline className="absolute -bottom-3 left-0 h-3 w-full text-[#FFDE8A]" />
              </span>{" "}
              of enterprise AI implementations fail?
            </Reveal>
            <Reveal
              delay={0.1}
              className="text-2xl md:text-3xl text-[#021879] font-medium leading-relaxed mb-8"
            >
              Because… most companies treat AI as a software installation.
              <strong className="block mt-4 text-[#147BFE] text-3xl md:text-4xl">
                We architect an organizational evolution.
              </strong>
            </Reveal>
            <Reveal
              delay={0.2}
              className="text-lg md:text-xl text-gray-600 font-medium space-y-6 max-w-xl"
            >
              <p>
                Tools are just infrastructure. By focusing on your core processes
                and most urgent needs, we bridge the gap between technical
                deployment and real business value.
              </p>
              <p>
                We don&apos;t force implementation — we drive full adoption by the
                people who power your business.
              </p>
            </Reveal>
          </div>

          <OpeningVisual />
        </div>
      </div>
    </section>
  );
}
