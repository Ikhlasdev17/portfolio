'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import IconButton from '@/components/general/icon-button'

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		if (theme === 'system') {
			setTheme('dark')
		}
	}, [theme])

	useEffect(() => {
		setMounted(true)
	}, [])

	// until the UI is mounted, display a dummy icon
	if (!mounted) {
		return (
			<IconButton>
				<Sun />
			</IconButton>
		)
	}

	return (
		<IconButton onClick={toggleTheme}>
			{theme === 'dark' ? <Sun /> : <MoonStar />}
		</IconButton>
	)
}

export default ThemeSwitcher

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
