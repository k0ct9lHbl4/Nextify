import { FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
	className?: string
}

const Box: FC<PropsWithChildren<BoxProps>> = ({ children, className }) => {
	return (
		<div
			className={twMerge('h-fit w-full rounded-lg bg-neutral-900', className)}
		>
			{children}
		</div>
	)
}

export default Box
