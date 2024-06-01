import HomePageComponents from '@/page-components/home-page-components/home-page-components'
import TranslationsProvider from '@/providers/translations-provider'
import initTranslations from '../i18n'
const i18nNamespaces = ['home']

const Home = async ({ params: { locale } }: any) => {
	const { t, resources } = await initTranslations(locale, i18nNamespaces)

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			resources={resources}
		>
			<HomePageComponents t={t} />
		</TranslationsProvider>
	)
}

export default Home
