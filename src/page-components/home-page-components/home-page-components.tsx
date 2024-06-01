import ContactSection from '@/components/sections/home/contact'
import ExperienceSection from '@/components/sections/home/experiences'
import HeroSection from '@/components/sections/home/hero'
import SkillsSection from '@/components/sections/home/skills'
import TestimonialsSection from '@/components/sections/home/testimonials'
import WorkSection from '@/components/sections/home/work'

function HomePageComponent({ t }: any) {
	return (
		<>
			<HeroSection />
			{/* <AboutMeSection /> */}
			<ExperienceSection />
			<SkillsSection />
			<WorkSection />
			<TestimonialsSection />
			<ContactSection />
		</>
	)
}

export default HomePageComponent
