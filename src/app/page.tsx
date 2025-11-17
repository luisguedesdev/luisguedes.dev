import SimpleNavbar from "../components/SimpleNavbar";
import SimpleHero from "../components/SimpleHero";
import SimpleSkills from "../components/SimpleSkills";
import SimpleProjects from "../components/SimpleProjects";
import SimpleFooter from "../components/SimpleFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <SimpleNavbar />
      <SimpleHero />
      <SimpleSkills />
      <SimpleProjects />
      <SimpleFooter />
    </div>
  );
}
