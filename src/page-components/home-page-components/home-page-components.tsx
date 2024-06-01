import ContactSection from '@/components/sections/home/contact'
import ExperienceSection from '@/components/sections/home/experiences'
import HeroSection from '@/components/sections/home/hero'
import SkillsSection from '@/components/sections/home/skills'
import WorkSection from '@/components/sections/home/work'

function HomePageComponent({ t }: any) {
	return (
		<>
			<HeroSection />
			<ExperienceSection />
			<SkillsSection />
			<WorkSection />
			<ContactSection />
		</>
	)
}

export default HomePageComponent
