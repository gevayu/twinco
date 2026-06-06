import { Prelude } from "@/components/home-v3/Prelude";
import { Opening } from "@/components/home-v3/Opening";
import { Methodology } from "@/components/home-v3/Methodology";
import { Solutions } from "@/components/home-v3/Solutions";
import { Edge } from "@/components/home-v3/Edge";
import { Inspiration } from "@/components/home-v3/Inspiration";
import { CaseStudy } from "@/components/home-v3/CaseStudy";
import { SocialProof } from "@/components/home-v3/SocialProof";
import { FinalCta } from "@/components/home-v3/FinalCta";
import { MouseBulb } from "@/components/home-v3/MouseBulb";
import { CardStack } from "@/components/home-v3/CardStack";
import { SmoothScroll } from "@/components/home-v3/SmoothScroll";

export default function HomeV3() {
  return (
    <>
      <SmoothScroll />
      <MouseBulb />
      <Prelude />
      <CardStack>
        <Opening />
        <Methodology />
        <Edge />
        <Solutions />
        <Inspiration />
        <CaseStudy />
        <SocialProof />
        <FinalCta />
      </CardStack>
    </>
  );
}
