import Link from 'next/link'
import { FC } from 'react'
import { IconType } from 'react-icons/lib'
import { twMerge } from 'tailwind-merge'

interface SidebarItemProps {
	icon: IconType
	label: string
	href: string
	active?: boolean
}

const SidebarItem: FC<SidebarItemProps> = ({
	icon,
	label,
	href,
	active = false
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				'text-md flex h-auto w-full items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white',
				active && 'text-white'
			)}
		>
			SidebarItem
		</Link>
	)
}

export default SidebarItem
