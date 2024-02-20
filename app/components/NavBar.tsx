"use client"
import { Container, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiBug } from 'react-icons/bi'

const links = [
    { label: "Dashboard",href:"/"},
    { label: "Issues",href:"/issues"}
]
export default function NavBar() {
    const activeLink = usePathname();

    return (
        <header className='px-5 py-4 h-16 border-0 shadow'>
            <Container>
                <Flex gap="4">
                    <Link href="/" className=''><BiBug size={22}/></Link>
                    <ul className='flex items-center gap-3'>
                        {links.map((item,index)=>(
                            <li key={index}><Link className={`${activeLink==item.href ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition`} href={item.href}>{item.label}</Link> </li>
                        ))}
                    </ul>
                </Flex>
            </Container>
        </header>
    )
}
