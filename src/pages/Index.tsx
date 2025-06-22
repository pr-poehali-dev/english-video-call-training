import Hero from "@/components/Hero";
import LevelsSection from "@/components/LevelsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LevelsSection />
      <ScheduleSection />
      <ContactSection />
    </div>
  );
};

export default Index;
