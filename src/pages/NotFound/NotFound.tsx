import { Button } from '@mui/material'
import ReferenceLink from 'components/Core/ReferenceLink/ReferenceLink'
import PageWrapper from 'components/Layout/PageWrapper/PageWrapper'
import type { ReactElement } from 'react'

const NotFound = (): ReactElement => (
	<PageWrapper>
		<h1>404</h1>
		<Button component={ReferenceLink} to='/'>
			Go Home
		</Button>
	</PageWrapper>
)

export default NotFound
