import { Box } from '@mui/material'
import Header from 'components/Navigation/Header/Header'
import type { ReactElement, ReactNode } from 'react'

interface PageWrapperProperties {
	children: ReactNode | ReactNode[]
}

const PageWrapper = ({ children }: PageWrapperProperties): ReactElement => (
	<Box display='flex' flexDirection='column'>
		<Header />
		<Box
			display='flex'
			flexDirection='column'
			width='100%'
			sx={{
				mx: 'auto',
				mt: 4,
				px: 4
			}}
		>
			{children}
		</Box>
	</Box>
)

export default PageWrapper
