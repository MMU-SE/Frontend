import { CircularProgress, Container, Stack } from '@mui/material'
import type { ReactElement } from 'react'

const Splash = (): ReactElement => (
	<Container
		role='main'
		aria-hidden='true'
		sx={{
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		}}
	>
		<Stack gap={4} alignItems='center'>
			<CircularProgress />
		</Stack>
	</Container>
)

export default Splash
