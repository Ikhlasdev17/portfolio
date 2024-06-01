'use client'

import ExperienceDetails from '@/components/data-display/experience-details'
import Tag from '@/components/data-display/tag'
import Typography from '@/components/general/typography'
import Container from '@/components/layout/container'
import { EXPERIENCES } from '@/lib/data'
import { useTranslation } from 'react-i18next'

const ExperienceSection = () => {
	const { t } = useTranslation()
	return (
		<Container className='bg-gray-50' id='experience'>
			<div className='flex flex-col items-center gap-4'>
				<div className='self-center'>
					<Tag label={t('experience')} />
				</div>
				<Typography variant='subtitle' className='max-w-xl text-center'>
					{t('experience_title_description')}
				</Typography>
			</div>

			{EXPERIENCES?.map((experience, index) => (
				<ExperienceDetails {...experience} key={index} />
			))}
		</Container>
	)
}

export default ExperienceSection
