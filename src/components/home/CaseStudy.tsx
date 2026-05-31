import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BrandImage } from "@/components/ui/BrandImage";
import { BrandVideo } from "@/components/ui/BrandVideo";

function CaseStudyNarrative() {
  return (
    <Reveal>
      <h2 className="text-4xl md:text-6xl font-bold text-[#021879] mb-8 tracking-tight">
        Architecture in Action:
        <br />
        Case Studies
      </h2>

      <div className="space-y-6 text-xl text-gray-700 font-medium leading-relaxed">
        <p>
          An international gaming company experienced a critical synchronization
          gap among real-time in-game systems, fast payment gateways, and
          delayed bank updates.
        </p>

        <div className="bg-white p-8 pt-10 rounded-2xl shadow-sm my-10 relative overflow-hidden">
          <span
            aria-hidden
            className="absolute top-1 left-5 text-7xl leading-none font-bold text-[#147BFE]/15 select-none"
          >
            &ldquo;
          </span>
          <p className="text-[#021879] font-bold text-2xl relative z-10">
            &quot;We didn&apos;t just patch the system; we engineered a custom AI
            workflow that mapped user behavior patterns and closed the financial
            loophole in real-time.&quot;
          </p>
        </div>

        <p>
          By deploying an intelligent engine, our algorithm automatically
          reconciles transactions in real time.
        </p>
      </div>

      <button className="group mt-12 inline-flex items-center gap-3 px-8 py-4 border-2 border-[#021879] text-[#021879] rounded-full text-lg font-bold hover:bg-[#021879] hover:text-white transition-all duration-300">
        Explore Case Studies &amp; Insights
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </Reveal>
  );
}

function CaseStudyVisual() {
  return (
    <Reveal
      delay={0.2}
      className="relative h-[500px] lg:h-[700px] w-full group rounded-[3rem] overflow-hidden shadow-2xl"
    >
      <BrandVideo
        src="/1114854_Woman_Job_1280x720.mp4"
        className="w-full h-full"
      />
      <div className="absolute top-10 right-10 w-48 h-48 rounded-[2rem] border-4 border-white/20 glass-card overflow-hidden shadow-2xl hidden md:block animate-float">
        <BrandImage
          src="https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&q=80&w=400"
          sizes="192px"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#021879] via-transparent to-transparent opacity-80 z-20" />
      <div className="absolute inset-x-0 bottom-0 z-30 bg-[#021879] px-10 py-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Real-time Reconciliation Engine
        </h3>
        <p className="text-[#E7F3FF] font-medium">
          Secured transaction processing and stopped revenue leakage instantly.
        </p>
      </div>
    </Reveal>
  );
}

export function CaseStudy() {
  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#F4F9FF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <CaseStudyNarrative />
        <CaseStudyVisual />
      </div>
    </section>
  );
}
