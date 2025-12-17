import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import HowIWorkSection from '@/components/how-i-work-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowIWorkSection />
      <ProjectsSection featured />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
