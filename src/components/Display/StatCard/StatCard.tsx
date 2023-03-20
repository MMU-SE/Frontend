import { Card, CardContent } from '@mui/material'
import type { ReactElement, ReactNode } from 'react'

interface StatCardProperties {
	children: ReactNode | ReactNode[]
}

const StatCard = ({ children }: StatCardProperties): ReactElement => (
	<Card
		sx={{
			minWidth: 'fit-content'
		}}
	>
		<CardContent
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 2
			}}
		>
			{children}
		</CardContent>
	</Card>
)

export default StatCard
