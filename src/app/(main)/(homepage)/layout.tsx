import { ReactNode } from "react";
import { Hero } from "./Hero";
import { SponsorSection } from "./SponsorSection";
import { PublicIntegrationServiceSection } from "./PublicIntegrationServiceSection";
import { GovernmentInformation } from "./GovernmentInformation";
import { GovernmentActivity } from "./GovernmentActivity";

type LayoutProps = {
  children: ReactNode;
  news: ReactNode;
  videos: ReactNode;
  newsPhotos: ReactNode;
  bulletin: ReactNode;
  activity: ReactNode;
};

export default function Layout({
  news,
  videos,
  newsPhotos,
  bulletin,
  activity,
}: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Hero />
      <PublicIntegrationServiceSection />
      <GovernmentInformation />
      {activity}
      {news}
      {videos}
      {newsPhotos}
      {bulletin}

      <SponsorSection />
    </div>
  );
}
