import ModernNavbar from "../components/ModernNavbar";
import ProfessionalHero from "../components/ProfessionalHero";
import CredibilitySection from "../components/CredibilitySection";
import ServicesSection from "../components/ServicesSection";
import ProfessionalProjects from "../components/ProfessionalProjects";
import ModernSkills from "../components/ModernSkills";
import ProfessionalContact from "../components/ProfessionalContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-marinho via-gray-900 to-marinho">
      <ModernNavbar />
      <ProfessionalHero />
      <CredibilitySection />
      <ServicesSection />
      <ProfessionalProjects />
      <ModernSkills />
      <ProfessionalContact />
    </div>
  );
}
