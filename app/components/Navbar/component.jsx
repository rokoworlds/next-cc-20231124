import Image from "next/image";
import Link from "next/link";
import logo from './roko-logo.png'

export default function Navbar () {
    return (
        <nav>
            <Image
                src={logo}
                alt="Roko logo"
                width={40}
                quality={100}
                placeholder="blur"
            />
            <h1>Helpdesk</h1>
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}