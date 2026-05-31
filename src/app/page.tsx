import { Prelude } from "@/components/home/Prelude";
import { Opening } from "@/components/home/Opening";
import { Methodology } from "@/components/home/Methodology";
import { Solutions } from "@/components/home/Solutions";
import { Edge } from "@/components/home/Edge";
import { Inspiration } from "@/components/home/Inspiration";
import { CaseStudy } from "@/components/home/CaseStudy";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Prelude />
      <Opening />
      <Methodology />
      <Solutions />
      <Edge />
      <Inspiration />
      <CaseStudy />
      <SocialProof />
      <FinalCta />
    </>
  );
}
