import { Box } from '@mui/material'
import MockToggle from 'components/Core/MockToggle/MockToggle'
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
		<Box>
			<Header />
			<Box
				component='main'
				sx={{
					p: 3,
					width: '100%',
					overflow: 'auto'
				}}
			>
				{children}
			</Box>
		</Box>
		<MockToggle />
	</Box>
)

export default PageWrapper
