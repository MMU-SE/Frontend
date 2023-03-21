import type { AlertColor } from '@mui/material'
import { Alert, Snackbar } from '@mui/material'
import type { ReactElement, ReactNode } from 'react'
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react'

interface TriggerSnackBarProperties {
	severity: AlertColor
	message: string
	autoHideDuration?: number
}

interface SnackbarContextType {
	triggerSnackbar: (properties: TriggerSnackBarProperties) => void
}

const SnackbarContext = createContext<SnackbarContextType>({
	triggerSnackbar: () => {}
})

export const SnackbarProvider = ({
	children
}: {
	children: ReactNode | ReactNode[]
}): ReactElement => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentProperties, setCurrentProperties] = useState<
		TriggerSnackBarProperties | undefined
	>()

	const triggerSnackbar = useCallback(
		(properties: TriggerSnackBarProperties): void => {
			setCurrentProperties(properties)
			setIsOpen(true)
		},
		[setIsOpen, setCurrentProperties]
	)

	const onClose = (): void => {
		setIsOpen(false)
	}

	const context = useMemo(() => ({ triggerSnackbar }), [triggerSnackbar])

	return (
		<SnackbarContext.Provider value={context}>
			{children}
			<Snackbar
				open={isOpen}
				autoHideDuration={currentProperties?.autoHideDuration ?? 5000}
				onClose={onClose}
				data-testid='snackbar'
			>
				<Alert
					onClose={onClose}
					severity={currentProperties?.severity ?? 'info'}
					sx={{ width: '100%' }}
				>
					{currentProperties?.message}
				</Alert>
			</Snackbar>
		</SnackbarContext.Provider>
	)
}

export const useSnackbar = (): SnackbarContextType =>
	useContext(SnackbarContext)
