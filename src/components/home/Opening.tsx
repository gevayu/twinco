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
    <section id="opening" className="py-24 md:py-32 px-6 md:px-12 bg-[#F4F9FF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
    </section>
  );
}
