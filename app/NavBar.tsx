"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { PiBug } from 'react-icons/pi'

const links = [
    { label: "Dashboard",href:"/"},
    { label: "Issues",href:"/issues"}
]
export default function NavBar() {
    const activeLink = usePathname();

    return (
        <header className='flex gap-6 items-center px-6 py-4 h-16 border-0 shadow'>
            <Link href="/" className=''><PiBug size={32}/></Link>
            <ul className='flex items-center gap-3'>
                {links.map((item,index)=>(
                    <li key={index}><Link className={`${activeLink==item.href ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition`} href={item.href}>{item.label}</Link> </li>
                ))}
            </ul>
        </header>
    )
}
