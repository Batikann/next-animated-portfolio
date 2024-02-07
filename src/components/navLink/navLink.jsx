'use client'

import { usePathname } from 'next/navigation'

const { default: Link } = require('next/link')

const NavLink = ({ link }) => {
  const pathName = usePathname()
  return (
    <Link
      className={pathName === link.url ? 'bg-black text-white p-1 rounded' : ''}
      href={link.url}
    >
      {link.title}
    </Link>
  )
}
export default NavLink
