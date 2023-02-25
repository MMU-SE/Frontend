import clsx from 'clsx'
import Header from 'components/Navigation/Header/Header'
import { SIDEBAR_SECTIONS } from 'components/Navigation/NavDefinitions'
import SideBar from 'components/Navigation/Sidebar/Sidebar'
import type { ReactElement, ReactNode } from 'react'

interface PageWrapperProperties {
	children: ReactNode | ReactNode[]
	maxWidth?: 'lg' | 'md' | 'sm' | 'xl'
	fillHeight?: boolean
	className?: string
}

const PageWrapper = ({
	children,
	maxWidth,
	fillHeight,
	className
}: PageWrapperProperties): ReactElement => (
	<div
		className={clsx('flex flex-col bg-white', {
			'h-screen': fillHeight
		})}
	>
		<Header />
		<div className='flex h-full flex-row'>
			<aside className='flex flex-col bg-light-grey'>
				<SideBar sections={SIDEBAR_SECTIONS} />
			</aside>
			<main
				className={clsx(
					'mx-auto mt-4 flex w-full flex-col px-4',
					{
						'max-w-sm': maxWidth === 'sm',
						'max-w-xl': maxWidth === 'md',
						'max-w-3xl': maxWidth === 'lg',
						'max-w-8xl': maxWidth === 'xl'
					},
					className
				)}
			>
				{children}
			</main>
		</div>
	</div>
)

export default PageWrapper
