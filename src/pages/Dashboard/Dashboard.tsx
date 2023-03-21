import { Box, Typography } from '@mui/material'
import StatCard from 'components/Display/StatCard/StatCard'
import CustomBarChart from 'components/Visualization/CustomBarChart/CustomBarChart'
import CustomComposedChart from 'components/Visualization/CustomComposedChart/CustomComposedChart'
import CustomPieChart from 'components/Visualization/CustomPieChart/CustomPieChart'
import { useAuth } from 'contexts/AuthProvider/AuthProvider'
import type { ReactElement } from 'react'

const Dashboard = (): ReactElement => {
	const { user } = useAuth()
	return (
		<Box display='flex' flexDirection='column' gap={4}>
			<span>{user?.email}</span>
			<Typography component='h1' variant='h4'>
				Dashboard
			</Typography>
			<Box display='flex' flexDirection='row' gap={4}>
				<StatCard>
					<Typography component='h2' variant='h6' fontFamily='serif'>
						Bar Chart
					</Typography>
					<CustomBarChart />
				</StatCard>
				<StatCard>
					<Typography component='h2' variant='h6'>
						Pie Chart
					</Typography>
					<CustomPieChart />
				</StatCard>
			</Box>
			<StatCard>
				<Typography component='h2' variant='h6'>
					Composed Chart
				</Typography>
				<CustomComposedChart />
			</StatCard>
		</Box>
	)
}
export default Dashboard
