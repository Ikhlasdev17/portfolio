'use client'

import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

import Tag from '@/components/data-display/tag'
import Typography from '@/components/general/typography'
import Card from '@/components/layout/card'
import Link from '@/components/navigation/link'
import { mergeClasses } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { ProjectDetails as ProjectDetailsType } from '../../lib/types'

type ProjectDetailsProps = ProjectDetailsType & {
	layoutType: 'default' | 'reverse'
}

const ProjectDetails = ({
	name,
	description,
	technologies,
	url,
	urls,
	previewImage,
	layoutType = 'default',
	role,
	github,
	images,
}: ProjectDetailsProps) => {
	const { i18n } = useTranslation()
	return (
		<Card className='mx-auto flex w-full max-w-6xl flex-col md:flex-row'>
			{/* Image */}
			<PhotoProvider>
				<div
					className={mergeClasses(
						'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
						layoutType === 'default'
							? 'md:rounded-l-xl md:border-r'
							: 'md:order-last md:rounded-r-xl md:border-l'
					)}
				>
					{images?.map((item: any, index: number) => {
						return (
							<PhotoView key={index} src={item.src}>
								<Image
									src={item}
									alt={`${item} preview`}
									className={mergeClasses(
										`rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 cursor-pointer`,
										index !== 0 && 'hidden'
									)}
									style={{ objectFit: 'cover' }}
								/>
							</PhotoView>
						)
					})}
				</div>
			</PhotoProvider>

			{/* Content */}
			<div
				className={mergeClasses(
					'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
					layoutType === 'default' ? '' : 'md:order-first'
				)}
			>
				<div>
					<Typography
						variant='subtitle'
						className='font-semibold text-gray-900'
					>
						{name}
					</Typography>
					<Typography
						variant='body3'
						className='font-semibold text-gray-500 mt-2'
					>
						{role}
					</Typography>
				</div>
				<Typography>
					{description && description[i18n.language === 'en' ? 'en' : 'ru']}
				</Typography>
				<div className='flex flex-wrap gap-2'>
					{technologies?.map((technology: string, index: number) => (
						<Tag key={index} label={technology} />
					))}
				</div>
				<div className='flex items-center gap-4'>
					{github ? (
						<Link
							href={github}
							noCustomization
							className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500 flex gap-2'
							externalLink
						>
							Source
							<ExternalLink />
						</Link>
					) : null}
					{urls ? (
						<>
							<Link
								href={urls.frontend}
								noCustomization
								className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500 flex gap-2'
								externalLink
							>
								Frontend
								<ExternalLink />
							</Link>
							<Link
								href={urls.backend}
								noCustomization
								className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500 flex gap-2'
								externalLink
							>
								Backend
								<ExternalLink />
							</Link>
						</>
					) : null}

					{!github && !urls ? (
						<div className='flex items-center opacity-55 gap-2'>
							<Github /> Private repository.
						</div>
					) : null}
				</div>
			</div>
		</Card>
	)
}

export default ProjectDetails
