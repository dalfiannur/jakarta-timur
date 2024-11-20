"use client";
import { EventSection } from "./_sections/EventSection";
import { GovernmentInformation } from "./_sections/GovernmentInformationSection";
import { HeroSection } from "./_sections/HeroSection";
import { PublicIntegrationServiceSection } from "./_sections/PublicIntegrationServiceSection";
import { SponsorSection } from "./_sections/SponsorSection";
import { NewsSection } from "./_sections/NewsSection";
import { VideoSection } from "./_sections/VideoSection";
import { GallerySection } from "./_sections/GallerySection";
import { BulletinSection } from "./_sections/BulletinSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PublicIntegrationServiceSection />
      <GovernmentInformation />
      <EventSection />
      <NewsSection />
      <VideoSection />
      <GallerySection />
      <BulletinSection />
      <SponsorSection />
    </div>
  );
}
