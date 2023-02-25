import { Link } from '@tanstack/react-location'
import clsx from 'clsx'
import type { ReactElement, ReactNode } from 'react'

interface NavLinks {
	label: string
	to: string
	icon: ReactNode
}

export interface SectionProperties {
	heading: string
	navLinks: NavLinks[]
}

interface SideBarProperties {
	sections: SectionProperties[]
}

const Section = ({ heading, navLinks }: SectionProperties): ReactElement => (
	<>
		<span className='my-2 mr-auto text-subhead font-semibold uppercase text-dark-grey'>
			{heading}
		</span>
		<span className='mx-[-1rem] mb-2 border-b-[0.063rem] border-dark-grey' />

		{navLinks.map(({ label, to, icon }) => (
			<Link to={to} key={`${label}-link`}>
				{({ isActive }) => (
					<div
						className={clsx(
							'mb-1 flex flex-row items-center gap-2 rounded-sm px-8 hover:bg-medium-grey ',
							{
								'bg-light-blue text-white': isActive
							}
						)}
					>
						{icon}
						<button type='button' className='text-md py-2 capitalize'>
							{label}
						</button>
					</div>
				)}
			</Link>
		))}
	</>
)

const SideBar = ({ sections }: SideBarProperties): ReactElement => (
	<div className='mx-4 flex flex-col'>
		{sections.map(({ heading, navLinks }) => (
			<div key={`${heading}-section`}>
				<Section heading={heading} navLinks={navLinks} key={heading} />
				<span className='mx-[-1rem] mb-2 mt-1 border-b-[0.063rem] border-dark-grey' />
			</div>
		))}
	</div>
)

export default SideBar
