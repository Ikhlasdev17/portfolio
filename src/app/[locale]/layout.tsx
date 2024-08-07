import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/header'
import { Providers } from '@/providers'
import TranslationsProvider from '@/providers/translations-provider'
import { Head } from 'next/document'
import initTranslations from '../i18n'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'Ikhlas Aralbaev | Full Stack developer from Uzbekistan.'
const description =
	'Full Stack developer (React.js | Node.js) from Uzbekistan, Nukus.'
const url = 'https://ikhlasaralbaev.uz'

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title,
	description,
	keywords: [
		'Frontend Developer',
		'Full Stack Developer',
		'React Developer',
		'Next.js Developer',
	],
	creator: 'Ikhlas Aralbaev',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		url,
		title,
		description,
		siteName: title,
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
}

const i18nNamespaces = ['home', 'common']

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: any
}) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces)

	return (
		<html lang='en' className='!scroll-smooth dark' suppressHydrationWarning>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content="Ikhlas's personal website." />

				{/* Open Graph Tags */}
				<meta property='og:title' content='Ikhlas Aralbaev | Web developer.' />
				<meta property='og:description' content="Ikhlas's personal website." />
				<meta property='og:image' content='/public/images/home-image.jpg' />
				<meta property='og:url' content='https://aralbaev.uz' />
				<meta property='og:type' content='website' />

				{/* Twitter Card Tags */}
				<meta name='twitter:card' content='/public/images/home-image.jpg' />
				<meta name='twitter:title' content='Ikhlas Aralbaev | Web developer.' />
				<meta name='twitter:description' content="Ikhlas's personal website." />
				<meta name='twitter:image' content='/public/images/home-image.jpg' />
			</Head>

			<body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
				<main className='flex min-h-screen w-full flex-col'>
					<Providers>
						<TranslationsProvider
							namespaces={i18nNamespaces}
							locale={locale}
							resources={resources}
						>
							<Header />
						</TranslationsProvider>
						{children}
					</Providers>
				</main>
			</body>
		</html>
	)
}
