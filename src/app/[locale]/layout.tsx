import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/header'
import { Providers } from '@/providers'
import TranslationsProvider from '@/providers/translations-provider'
import Script from 'next/script'
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
			<Script>
				{`<!-- Yandex.Metrika counter -->
				<script type="text/javascript" >
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(97459122, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
					});
				</script>
				<noscript><div><img src="https://mc.yandex.ru/watch/97459122" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
				<!-- /Yandex.Metrika counter -->`}
			</Script>
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
