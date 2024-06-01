import type { StaticImageData } from 'next/image'

export type TechDetails = {
	logo: string | StaticImageData
	darkModeLogo?: string | StaticImageData
	label: string
	url: string
}

export type SummaryData = {
	en: string[]
	ru: string[]
}

export type ExperienceDetails = {
	logo: string | StaticImageData
	darkModeLogo?: string | StaticImageData
	logoAlt: string
	position: string
	currentlyWorkHere?: boolean
	startDate: Date
	endDate?: Date
	summary: SummaryData
}

type description = {
	ru: string
	en: string
}

export type ProjectDetails = {
	name: string
	description: description
	url: string
	previewImage: string | StaticImageData
	technologies: string[]
	role?: string
	github?: string
	images?: string[]
}

export type TestimonialDetails = {
	personName: string
	personAvatar?: string | StaticImageData
	testimonial: string
	title: string
}
