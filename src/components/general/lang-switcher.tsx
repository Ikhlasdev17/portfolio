'use client'

import IconButton from '@/components/general/icon-button'
import { i18nConfig } from '@/i18nConfig'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const LangSwitcher = () => {
	const { i18n } = useTranslation()
	const currentLocale = i18n.language
	const router = useRouter()
	const currentPathname = usePathname()

	const handleChange = () => {
		const newLocale = i18n.language === 'ru' ? 'en' : 'ru'

		// set cookie for next-i18n-router
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		// redirect to the new locale path
		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.defaultLocale
		) {
			router.push('/' + newLocale + currentPathname)
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
		}

		router.refresh()
	}

	return (
		<IconButton onClick={handleChange}>
			<span className={`fi fi-${i18n.language === 'ru' ? 'us' : 'ru'}`}></span>
		</IconButton>
	)
}

export default LangSwitcher
