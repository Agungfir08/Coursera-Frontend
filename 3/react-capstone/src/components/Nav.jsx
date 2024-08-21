import logo from '../assets/icons/Logo.svg'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between'>
        <img src={logo}/>
        <ul className=' flex gap-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}
