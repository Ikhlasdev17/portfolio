'use client'

import Tag from '@/components/data-display/tag'
import TechDetails from '@/components/data-display/tech-details'
import Typography from '@/components/general/typography'
import Container from '@/components/layout/container'
import { TECHNOLOGIES } from '@/lib/data'
import { useTranslation } from 'react-i18next'

const SkillsSection = () => {
	const { t } = useTranslation()
	return (
		<Container>
			<div className='flex flex-col items-center gap-4'>
				<div className='self-center'>
					<Tag label={t('skills')} />
				</div>
				<Typography variant='subtitle' className='max-w-xl text-center'>
					{t('skills_title')}
				</Typography>
			</div>

			<div className='grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12'>
				{TECHNOLOGIES.map((technology, index) => (
					<TechDetails {...technology} key={index} />
				))}
			</div>
		</Container>
	)
}

export default SkillsSection
