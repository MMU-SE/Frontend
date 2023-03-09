import { Box } from '@mui/material'
import Header from 'components/Navigation/Header/Header'
import { SIDEBAR_SECTIONS } from 'components/Navigation/NavDefinitions'
import SideBar from 'components/Navigation/Sidebar/Sidebar'
import type { ReactElement, ReactNode } from 'react'

interface PageWrapperProperties {
	children: ReactNode | ReactNode[]
}

const PageWrapper = ({ children }: PageWrapperProperties): ReactElement => (
	<Box display='flex'>
		<SideBar sections={SIDEBAR_SECTIONS} />
		<Box display='flex' flexDirection='column' width='100%'>
			<Header />
			<Box
				component='main'
				sx={{
					p: 3
				}}
			>
				{children}
			</Box>
		</Box>
	</Box>
)

export default PageWrapper
