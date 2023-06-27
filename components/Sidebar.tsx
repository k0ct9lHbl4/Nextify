'use client'

import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useMemo } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'

import Box from './Box'
import SidebarItem from './SidebarItem'

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: 'Home',
				active: pathname !== '/search',
				href: '/'
			},
			{
				icon: BiSearch,
				label: 'Search',
				active: pathname === '/search',
				href: '/search'
			}
		],
		[pathname]
	)

	return (
		<div className="flex h-full">
			<div className="hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex">
				<Box>
					<div className="flex flex-col gap-y-4 px-5 py-4">
						{routes.map(route => (
							<SidebarItem key={route.label} {...route} />
						))}
					</div>
				</Box>
				<Box className="h-full overflow-y-auto">Song Library</Box>
			</div>
		</div>
	)
}

export default Sidebar
