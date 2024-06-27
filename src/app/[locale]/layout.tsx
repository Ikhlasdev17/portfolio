import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/header'
import { Providers } from '@/providers'
import TranslationsProvider from '@/providers/translations-provider'
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

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID

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
