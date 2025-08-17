import ModernNavbar from "../components/ModernNavbar";
import ModernHero from "../components/ModernHero";
import ModernAbout from "../components/ModernAbout";
import ModernProjects from "../components/ModernProjects";
import ModernSkills from "../components/ModernSkills";
import ModernContact from "../components/ModernContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-marinho via-gray-900 to-marinho">
      <ModernNavbar />
      <ModernHero />
      <ModernAbout />
      <ModernProjects />
      <ModernSkills />
      <ModernContact />
    </div>
  );
}
