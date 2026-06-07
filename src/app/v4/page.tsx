import { Prelude } from "@/components/home-v4/Prelude";
import { Opening } from "@/components/home-v4/Opening";
import { Methodology } from "@/components/home-v4/Methodology";
import { Solutions } from "@/components/home-v4/Solutions";
import { Edge } from "@/components/home-v4/Edge";
import { Inspiration } from "@/components/home-v4/Inspiration";
import { CaseStudy } from "@/components/home-v4/CaseStudy";
import { SocialProof } from "@/components/home-v4/SocialProof";
import { FinalCta } from "@/components/home-v4/FinalCta";
import { MouseBulb } from "@/components/home-v4/MouseBulb";
import { CardStack } from "@/components/home-v4/CardStack";
import { SmoothScroll } from "@/components/home-v4/SmoothScroll";

export default function HomeV4() {
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
