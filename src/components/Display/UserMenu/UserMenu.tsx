/* eslint-disable unicorn/no-null */
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip
} from '@mui/material'
import type { ReactElement } from 'react'
import { useState } from 'react'

const UserMenu = (): ReactElement => {
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null)
	const open = Boolean(anchorElement)
	/* const { isAuthenticated, user, logout } = useAuth() */

	const onOpen = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorElement(event.currentTarget)
	}

	const onClose = (): void => {
		setAnchorElement(null)
	}

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Tooltip title='Account settings'>
					<IconButton
						onClick={onOpen}
						size='small'
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorElement}
				id='account-menu'
				open={open}
				onClose={onClose}
				onClick={onClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0
						}
					}
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<PersonAdd fontSize='small' />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize='small' />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	)
}

export default UserMenu
