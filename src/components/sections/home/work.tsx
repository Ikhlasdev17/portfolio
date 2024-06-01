'use client'

import ProjectDetails from '@/components/data-display/project-details'
import Tag from '@/components/data-display/tag'
import Typography from '@/components/general/typography'
import Container from '@/components/layout/container'
import { PROJECTS } from '@/lib/data'
import { useTranslation } from 'react-i18next'

const WorkSection = () => {
	const { t } = useTranslation()
	return (
		<Container id='work'>
			<div className='flex flex-col items-center gap-4'>
				<div className='self-center'>
					<Tag label={t('work')} />
				</div>
				<Typography variant='subtitle' className='max-w-xl text-center'>
					{t('work_title_description')}
				</Typography>
			</div>

			{PROJECTS?.map((project, index) => (
				<ProjectDetails
					key={index}
					{...project}
					layoutType={index % 2 === 0 ? 'default' : 'reverse'}
				/>
			))}
		</Container>
	)
}

export default WorkSection
