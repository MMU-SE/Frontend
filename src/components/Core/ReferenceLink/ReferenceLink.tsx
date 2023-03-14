import type { LinkProps } from '@tanstack/react-location'
import { Link } from '@tanstack/react-location'
import { forwardRef } from 'react'

const ReferenceLink = forwardRef<HTMLAnchorElement, LinkProps>(
	(properties, reference) => {
		const { children, ...restProperties } = properties
		return (
			<Link _ref={reference} {...restProperties}>
				{children}
			</Link>
		)
	}
)

export default ReferenceLink
