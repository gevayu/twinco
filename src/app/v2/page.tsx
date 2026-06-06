import { Prelude } from "@/components/home-v2/Prelude";
import { Opening } from "@/components/home-v2/Opening";
import { Methodology } from "@/components/home-v2/Methodology";
import { Solutions } from "@/components/home-v2/Solutions";
import { Edge } from "@/components/home-v2/Edge";
import { Inspiration } from "@/components/home-v2/Inspiration";
import { CaseStudy } from "@/components/home-v2/CaseStudy";
import { SocialProof } from "@/components/home-v2/SocialProof";
import { FinalCta } from "@/components/home-v2/FinalCta";
import { MouseBulb } from "@/components/home-v2/MouseBulb";

export default function HomeV2() {
  return (
    <>
      <MouseBulb />
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
