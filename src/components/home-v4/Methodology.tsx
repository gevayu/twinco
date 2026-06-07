import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandImage } from "@/components/ui/BrandImage";
import { IconArrowRight } from "@/components/ui/icons";
import { SectionFrame } from "@/components/home-v4/SectionFrame";

const steps = [
  {
    step: "1",
    title: "Pinpoint Challenge",
    desc: "Audit workflows to isolate high-impact inefficiencies where AI delivers immediate value.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    bg: "bg-[#F4F9FF]",
  },
  {
    step: "2",
    title: "Architect Blueprint",
    desc: "Build a strategic blueprint tailored to your unique process-driven data structure.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500",
    bg: "bg-sky-gradient",
  },
  {
    step: "3",
    title: "Design Ecosystem",
    desc: "Engineer custom AI workflows and identify precise technical tools required.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
    bg: "bg-[#F4F9FF]",
  },
  {
    step: "4",
    title: "Lead Adoption",
    desc: "Guide teams through the transition so people and AI actually work together.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500",
    bg: "bg-sunrise-gradient",
  },
];

function StepCard({ item, delay }: { item: (typeof steps)[number]; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className={`group ${item.bg} flex flex-col overflow-hidden rounded-[2rem] border border-[#147BFE]/20 transition-transform duration-500 hover:-translate-y-2 lg:flex-1`}
    >
      <div className="relative h-40 overflow-hidden">
        <BrandImage
          src={item.img}
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="h-full w-full"
        />
        <div className="absolute left-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#147BFE] shadow-lg">
          {item.step}
        </div>
      </div>
      <div className="flex flex-grow flex-col bg-white/50 p-8 backdrop-blur-sm">
        <h3 className="mb-4 text-2xl font-bold text-[#021879]">{item.title}</h3>
        <p className="text-lg font-medium leading-relaxed text-gray-700">
          {item.desc}
        </p>
      </div>
    </Reveal>
  );
}

export function Methodology() {
  return (
    <SectionFrame
      id="methodology"
      outerStyle={{
        background: "linear-gradient(0deg, #FFF7E1 0%, #F4F9FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#021879] mb-6 tracking-tight">
            Our Methodology
          </h2>
          <p className="text-2xl text-gray-500 font-medium">
            More than AI tools, we focus on the process.
          </p>
        </Reveal>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-4">
          {steps.map((item, idx) => (
            <Fragment key={item.step}>
              <StepCard item={item} delay={idx * 0.1} />
              {idx < steps.length - 1 ? (
                <div
                  aria-hidden
                  className="hidden shrink-0 items-center justify-center lg:flex"
                >
                  <IconArrowRight className="h-7 w-7 animate-nudge-x text-[#147BFE]" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
