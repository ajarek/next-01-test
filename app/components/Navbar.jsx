import Link from 'next/link'
import Image from 'next/image'
import Logo from './my-logo.png'
export default function Navbar() {
  return (
    <nav>
       <Image
       src={Logo}
       alt='Logo'
       width={30}
       quality={100}
       placeholder='blur'
       />
      <h1>HelpDesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
