import type { Metadata } from "next";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import { ANIMATION_VIDEOS } from "@/lib/site";

export const metadata: Metadata = { title: "Animation", description: "2D and 3D animation, explainer and product videos." };

export default function Page() {
  return (
    <>
      <Hero image="2025/09/Animation-Main.png" />
      <VideoGrid title="Animation" videos={ANIMATION_VIDEOS} />
    </>
  );
}
