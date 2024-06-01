import { Linkedin, Youtube } from 'lucide-react'
import { BsTelegram } from 'react-icons/bs'

import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg'
import LogoCypress from '/public/images/logos/icon-cypress.svg'
import LogoExpressLight from '/public/images/logos/icon-express-light.svg'
import LogoExpress from '/public/images/logos/icon-express.svg'
import LogoFigma from '/public/images/logos/icon-figma.svg'
import LogoGit from '/public/images/logos/icon-git.svg'
import LogoJavascript from '/public/images/logos/icon-javascript.svg'
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg'
import LogoNest from '/public/images/logos/icon-nest.svg'
import LogoNextjs from '/public/images/logos/icon-nextjs.svg'
import LogoNodejs from '/public/images/logos/icon-nodejs.svg'
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg'
import LogoReact from '/public/images/logos/icon-react.svg'
import LogoSass from '/public/images/logos/icon-sass.svg'
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg'
import LogoSocket from '/public/images/logos/icon-socket.svg'
import LogoStorybook from '/public/images/logos/icon-storybook.svg'
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg'
import LogoTypescript from '/public/images/logos/icon-typescript.svg'

import LogoEncode from '/public/images/work/encode_black.png'
import LogoEncodeDark from '/public/images/work/encode_light.png'
import LogoGreenApex from '/public/images/work/natiyje.svg'
import LogoGreenApexLight from '/public/images/work/natiyje_light.svg'
import LogoDotnpixelLight from '/public/images/work/texnopos.png'

import Muvvo from '/public/images/projects/tg_image_2932807041.jpeg'

import { ExperienceDetails } from './types'
import AvatarDummy from '/public/images/avatar-dummy.svg'
import AvatarEugen from '/public/images/avatar-eugen.png'
import AvatarKrisztian from '/public/images/avatar-krisztian.png'

import Muvvo2 from '/public/images/projects/muvvo2.jpeg'
import Muvvo3 from '/public/images/projects/muvvo3.jpeg'
import Muvvo4 from '/public/images/projects/muvvo4.jpeg'
import Muvvo5 from '/public/images/projects/muvvo5.jpeg'

import Siymo1 from '/public/images/projects/siymo/siymo1.jpeg'
import Siymo2 from '/public/images/projects/siymo/siymo2.jpeg'
import Siymo3 from '/public/images/projects/siymo/siymo3.jpeg'
import Siymo4 from '/public/images/projects/siymo/siymo4.jpeg'

import Vivian1 from '/public/images/projects/vivian/vivian1.png'
import Vivian2 from '/public/images/projects/vivian/vivian2.png'

import Natiyje1 from '/public/images/projects/natiyje/natiyje1.jpeg'
import Natiyje2 from '/public/images/projects/natiyje/natiyje2.jpeg'
import Natiyje3 from '/public/images/projects/natiyje/natiyje3.jpeg'
import Natiyje4 from '/public/images/projects/natiyje/natiyje4.jpeg'
import Natiyje5 from '/public/images/projects/natiyje/natiyje5.jpeg'
import Natiyje6 from '/public/images/projects/natiyje/natiyje6.jpeg'
import Natiyje7 from '/public/images/projects/natiyje/natiyje7.jpeg'

import Lms1 from '/public/images/crm/lms1.jpeg'
import Lms2 from '/public/images/crm/lms2.jpeg'
import Lms3 from '/public/images/crm/lms3.jpeg'
import Lms4 from '/public/images/crm/lms4.jpeg'

export const EXTERNAL_LINKS = {
	GITHUB: 'https://github.com/Ikhlasdev17',
	LINKEDIN: 'https://www.linkedin.com/in/ыклас-аралбаев-68256622b',
	TELEGRAM: 'https://t.me/ikhlasaralbaev',
	YOUTUBE: 'https://www.youtube.com/channel/UCk3Ij43kR-hLcH50F5pnqrg',
}

export const NAV_LINKS = [
	{
		label: 'about',
		href: '#about',
	},
	{
		label: 'experience',
		href: '#experience',
	},
	{
		label: 'work',
		href: '#work',
	},
	{
		label: 'contact',
		href: '#contact',
	},
]

export const SOCIAL_LINKS = [
	{
		icon: Linkedin,
		url: 'www.linkedin.com/in/ыклас-аралбаев-68256622b',
	},
	{
		icon: Youtube,
		url: 'https://www.youtube.com/channel/UCk3Ij43kR-hLcH50F5pnqrg',
	},
	{
		icon: BsTelegram,
		url: 'https://t.me/ikhlasaralbaev',
	},
]

export const TECHNOLOGIES = [
	{
		label: 'Javascript',
		logo: LogoJavascript,
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		label: 'Typescript',
		logo: LogoTypescript,
		url: 'https://www.typescriptlang.org/',
	},
	{
		label: 'React',
		logo: LogoReact,
		url: 'https://react.dev/',
	},
	{
		label: 'Next.js',
		logo: LogoNextjs,
		url: 'https://nextjs.org/',
	},
	{
		label: 'Node.js',
		logo: LogoNodejs,
		url: 'https://nodejs.org/en',
	},
	{
		label: 'Express.js',
		logo: LogoExpress,
		darkModeLogo: LogoExpressLight,
		url: 'https://expressjs.com/',
	},
	{
		label: 'Nest.js',
		logo: LogoNest,
		url: 'https://nestjs.com/',
	},
	{
		label: 'Socket.io',
		logo: LogoSocket,
		darkModeLogo: LogoSocketLight,
		url: 'https://socket.io/',
	},
	{
		label: 'PostgreSQL',
		logo: LogoPostgreSQL,
		url: 'https://www.postgresql.org/',
	},
	{
		label: 'MongoDB',
		logo: LogoMongoDB,
		url: 'https://www.mongodb.com/',
	},
	{
		label: 'Sass/Scss',
		logo: LogoSass,
		url: 'https://sass-lang.com/',
	},
	{
		label: 'Tailwindcss',
		logo: LogoTailwindcss,
		url: 'https://tailwindcss.com/',
	},
	{
		label: 'Figma',
		logo: LogoFigma,
		url: 'https://www.figma.com/',
	},
	{
		label: 'Cypress',
		logo: LogoCypress,
		darkModeLogo: LogoCypressLight,
		url: 'https://www.cypress.io/',
	},
	{
		label: 'Storybook',
		logo: LogoStorybook,
		url: 'https://storybook.js.org/',
	},
	{
		label: 'Git',
		logo: LogoGit,
		url: 'https://git-scm.com/',
	},
]

export const EXPERIENCES: ExperienceDetails[] = [
	{
		logo: LogoEncode,
		darkModeLogo: LogoEncodeDark,
		logoAlt: 'Encode logo',
		position: 'Full Stack developer',
		startDate: new Date(2024, 0),
		currentlyWorkHere: true,
		company: 'OOO "ENCODE"',
		summary: {
			en: [
				`A company that deals with business automation.
				Developed ERP and CRM. 
				`,
				`Technologies that I used in the company: React, Next, Material UI, Styled Components, Tailwind, Jest, Storybook, Websocket. Telegraf, Express`,
				`Integration with IP Telephony (online pbx), Meta, Telegram.`,
				`CI/CD (GH-actions) | Docker`,
			],
			ru: [
				`Компания которая занимается автоматизаций бизнеса.
				Разработал ERP и CRM.
				`,
				`Технологии, которые я использовал в компании: React, Next, Material UI,
				Styled Components, Tailwind, Jest, Storybook, Websocket, Telegraf, Express`,
				`Интеграции с ИП Телефонии (online pbx), Meta, Telegram.`,
				`CI/CD (GH-actions) | Docker`,
			],
		},
	},
	{
		logo: LogoGreenApex,
		darkModeLogo: LogoGreenApexLight,
		logoAlt: 'Natiyje logo',
		position: 'Full Stack developer',
		startDate: new Date(2023, 7),
		endDate: new Date(2024, 0),
		company: 'OOO "Nátiyje"',
		summary: {
			en: [
				'Startup project - for online and hybrid education.',
				'Developed the backend part on: NestJS, database - MongoDB',
				'And the frontend part developed on: NextJS, Storybook, ChakraUI, Jest.',
				'Integration with various services such as: Eskiz.uz, Click.uz, Payme.uz, and video hosting.',
			],
			ru: [
				'Стартап проект - для онлайн и гибридный образовании.',
				'Разработал бэкенд часть на NestJS, БД - MongoDB',
				'And the frontend part developed on: NextJS, Storybook, ChakraUI, Jest.',
				'Интеграция с различными сервисами такие как: Eskiz.uz, Click.uz, Payme.uz, и видеохостинг Spotlightr.com',
			],
		},
	},
	{
		logo: LogoDotnpixelLight,
		logoAlt: 'TEXNOPOS logo',
		position: 'Frontend mentor',
		startDate: new Date(2023, 8),
		endDate: new Date(2024, 0),
		company: 'OOO "TexnoPOS IT Academy"',
		summary: {
			en: [
				'Engaged as a Frontend Mentor, providing guidance and expertise in web development to support the professional growth of individuals in the field.',
				`Instructed and mentored a diverse cohort of over +50 students, fostering their academic growth and development.`,
				`Sharing web programming knowledge.
			`,
			],
			ru: [
				'Работал наставником по интерфейсу, предоставляя рекомендации и экспертные знания в области веб-разработки для поддержки профессионального роста людей в этой области.',
				`Инструктировал и наставлял разнообразную группу из более чем 50 студентов, способствуя их академическому росту и развитию.`,
				`Делимся знаниями в области веб-программирования.
			`,
			],
		},
	},
	{
		logo: LogoDotnpixelLight,
		logoAlt: 'TEXNOPOS logo',
		position: 'Frontend developer',
		startDate: new Date(2022, 1),
		endDate: new Date(2023, 10),
		company: 'OOO "TexnoPOS SOFT"',
		summary: {
			en: [
				'CRM systems were developed and automatic SMS sending was carried out. Primary technologies: JavaScript, React, Php, Laravel, Kotlin.',
				`Patient diagnostic automation systems have been developed for private clinics. Primary technologies: JavaScript, Php, Laravel.`,
				`A business process automation program has been developed for some roles. Primary technologies: JavaScript, React, Php, Laravel, Kotlin.
			`,
			],
			ru: [
				'Разработаны CRM-системы и осуществлена ​​автоматическая отправка СМС. Основные технологии: JavaScript, React, Php, Laravel, Kotlin.',
				`Для частных клиник разработаны системы автоматизации диагностики пациентов. Основные технологии: JavaScript, Php, Laravel.`,
				`Для некоторых должностей разработана программа автоматизации бизнес-процессов. Основные технологии: JavaScript, React, Php, Laravel, Kotlin.
			`,
			],
		},
	},
]

export const PROJECTS: any[] = [
	{
		name: 'ERP system',
		description: {
			en: 'A fully automated ERP system for car salons and car services.',
			ru: 'Полностью автоматизированная ERP-система для автосалонов и автосервисов.',
		},
		url: '#',
		previewImage: Muvvo,
		images: [Muvvo, Muvvo2, Muvvo3, Muvvo4, Muvvo5],
		role: 'Frontend developer',
		technologies: [
			'React',
			'Typescript',
			'Material UI',
			'Socket.io',
			'Redux Toolkit',
			'Styled Components',
			'Storybook',
			'Python',
			'Django',
			'Meta integration',
			'IP Telephony',
		],
	},
	{
		name: 'CRM system - Siymo',
		description: {
			en: `CRM system for Siymo.uz marketing company. It has a beautiful and convenient UI/UX.`,
			ru: `CRM система для маркетинговой компании Siymo.uz. Имеет красивый и удобный UI/UX.`,
		},
		url: '#',
		role: 'Frontend developer',
		previewImage: Siymo1,
		images: [Siymo1, Siymo2, Siymo3, Siymo4],
		technologies: [
			'React',
			'Typescript',
			'Styled Components',
			'Material UI',
			'Redux Toolkit',
			'React Query',
			'Socket.io',
			'React Charts',
			'Python',
			'Django',
		],
	},
	{
		name: 'CRM system - Vivian.uz',
		description: {
			en: 'A CRM system that fully automates the sales and production sides for the Vivian.uz production company.',
			ru: `CRM-система, полностью автоматизирующая продажи и производство производственной компании Vivian.uz.`,
		},
		url: '#',
		role: 'Frontend developer',
		previewImage: Vivian1,
		images: [Vivian1, Vivian2],
		technologies: [
			'React',
			'Typescript',
			'Tailwindcss',
			'Ant Design',
			'RTK Query',
			'PHP',
			'Laravel',
		],
	},
	{
		name: 'Online Learning PLatform',
		description: {
			en: 'Online learning platform for online and hybrid learning. Monitoring of courses, sales department, management of students and employees.',
			ru: `Платформа онлайн-обучения для онлайн- и гибридного обучения. Мониторинг курса, отдел продаж, управление студентами и персоналом.`,
		},
		url: '#',
		role: 'Full-stack developer',
		previewImage: Natiyje1,
		images: [
			Natiyje1,
			Natiyje2,
			Natiyje3,
			Natiyje4,
			Natiyje5,
			Natiyje6,
			Natiyje7,
		],
		technologies: [
			'React',
			'Next.js',
			'Typescript',
			'Chakra UI',
			'Jest',
			'Storybook',
			'Nest.js',
			'MongoDB',
			'SMS Integration (eskiz.uz)',
			'Payment Integration (click.uz)',
		],
		github: 'https://github.com/Ikhlasdev17/natiyje-client.git',
	},
	{
		name: 'LMS System',
		description: {
			en: 'LMS system for full automation of training centers. Including customers, staff, courses, center branches and other management.',
			ru: `Система LMS для полной автоматизации учебных центров. Включая клиентов, сотрудников, курсы, филиалы центра и другое руководство.`,
		},
		url: '#',
		role: 'Frontend developer',
		previewImage: Lms1,
		images: [Lms1, Lms2, Lms3, Lms4],
		technologies: [
			'React',
			'Typescript',
			'Ant Design',
			'Tailwind',
			'Storybook',
			'PHP',
			'Laravel',
		],
	},
]

export const TESTIMONIALS = [
	{
		personName: 'Krisztian Gyuris',
		personAvatar: AvatarKrisztian,
		title: 'Founder - inboxgenie.io',
		testimonial:
			'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
	},
	{
		personName: 'Eugen Esanu',
		personAvatar: AvatarEugen,
		title: 'Founder - shosho.design',
		testimonial:
			'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
	},
	{
		personName: 'Joe Matkin',
		personAvatar: AvatarDummy,
		title: 'Freelancer',
		testimonial:
			'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
	},
]
