import { ChevronLeft } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import type { CSSObject, Theme } from '@mui/material'
import {
	Divider,
	Drawer as MuiDrawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled
} from '@mui/material'
import ReferenceLink from 'components/Core/ReferenceLink/ReferenceLink'
import type { ReactElement, ReactNode } from 'react'
import { useState } from 'react'

interface NavLinks {
	label: string
	to: string
	icon: ReactNode
}

export interface SectionProperties {
	navLinks: NavLinks[]
	isOpen?: boolean
}

interface SideBarProperties {
	sections: SectionProperties[]
}

const drawerWidth = 240

const Section = ({ navLinks, isOpen }: SectionProperties): ReactElement => (
	<>
		{navLinks.map(({ label, to, icon }) => (
			<ListItem key={label} disablePadding sx={{ display: 'block' }}>
				<ListItemButton
					component={ReferenceLink}
					to={to}
					sx={{
						minHeight: 48,
						justifyContent: isOpen ? 'initial' : 'center',
						px: 2.5
					}}
				>
					<ListItemIcon
						sx={{
							minWidth: 0,
							mr: isOpen ? 3 : 'auto',
							justifyContent: 'center',
							color: 'yellow.main'
						}}
					>
						{icon}
					</ListItemIcon>
					<ListItemText
						primary={label}
						sx={{ opacity: isOpen ? 1 : 0, color: 'yellow.main' }}
					/>
				</ListItemButton>
			</ListItem>
		))}
	</>
)

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
})

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: property => property !== 'open'
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme)
	})
}))

const SideBar = ({ sections }: SideBarProperties): ReactElement => {
	const [open, setOpen] = useState(false)

	const onToggleNavigation = (): void => {
		setOpen(!open)
	}

	return (
		<Drawer
			variant='permanent'
			open={open}
			sx={{
				'& .MuiDrawer-paper': {
					backgroundColor: 'mediumGrey.main',
					color: 'darkGrey.main'
				}
			}}
		>
			<IconButton
				onClick={onToggleNavigation}
				sx={{
					ml: open ? 'auto' : 0,
					color: 'yellow.main'
				}}
			>
				{open ? <ChevronLeft /> : <MenuIcon />}
			</IconButton>
			<List>
				{sections.map(({ navLinks }) => (
					<>
						<Divider />
						<Section navLinks={navLinks} isOpen={open} />
						<Divider />
					</>
				))}
			</List>
		</Drawer>
	)
}

export default SideBar
