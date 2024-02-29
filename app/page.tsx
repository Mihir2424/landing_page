import React from "react";
import HomeSection from "@/components/homeSection";
import AboutSection from "@/components/aboutSection";
import Features from "@/components/features";
import Navbar from "@/components/navbar";
import Advantages from "@/components/advantages";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Features />
      <Advantages />
    </main>
  );
}
