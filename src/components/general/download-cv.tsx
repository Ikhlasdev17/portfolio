'use client'

import Button from '@/components/general/button'
import { useTranslation } from 'react-i18next'

const DownloadCV = () => {
	const { t } = useTranslation()
	return (
		<Button onClick={() => window?.open('/files/my-resume.pdf', '_blank')}>
			{t('download_cv')}
		</Button>
	)
}

export default DownloadCV
