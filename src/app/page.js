import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection  from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    
      <main className='overflow-y-scroll snap-y snap-mandatory'>
        <Header className="snap-start" />
        <HeroSection className="snap-start" />
        <ProjectsSection className="snap-start" />
        <SkillsSection className="snap-start" />
        <ContactSection className="snap-start" />
      </main>
    
  );
}
