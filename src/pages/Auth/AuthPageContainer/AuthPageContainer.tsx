import { Paper } from '@mui/material'
import type { ReactElement, ReactNode } from 'react'

interface AuthPageContainerProperties {
	children: ReactNode | ReactNode[]
}

const AuthPageContainer = ({
	children
}: AuthPageContainerProperties): ReactElement => (
	<main
		style={{
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			background:
				'radial-gradient(circle, rgba(94,92,230,1) 0%, rgba(28,28,30,1) 65%)'
		}}
	>
		<Paper
			sx={{
				p: 6,
				maxWidth: 'max-content',
				mx: 'auto',
				shadow: 3,
				backgroundColor: 'mediumGrey.main',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
			{children}
		</Paper>
	</main>
)

export default AuthPageContainer
