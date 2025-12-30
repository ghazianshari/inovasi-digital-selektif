import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HubungiKami from "@/components/HubungiKami";
import KualitasKami from "@/components/KualitasKami";
import LayananPPOB from "@/components/LayananPPOB";
import TentangKami from "@/components/TentangKami";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <KualitasKami />
      <TentangKami />
      <LayananPPOB />
      <HubungiKami />
      <Footer />
    </div>
  );
}
