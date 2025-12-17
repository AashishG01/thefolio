import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection featured />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
