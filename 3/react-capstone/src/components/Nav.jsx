import logo from '../assets/icons/Logo.svg';

export default function Nav() {
    const navList = [
        {
            name: 'Home',
            link: '#',
        },
        {
            name: 'About',
            link: '#',
        },
        {
            name: 'Menu',
            link: '#',
        },
        {
            name: 'Reservation',
            link: '#',
        },
        {
            name: 'Order Online',
            link: '#',
        },
        {
            name: 'Login',
            link: '#',
        },
    ];

    return (
        <nav className='flex items-center justify-between py-5'>
            <img src={logo} />
            <ul className=' flex gap-4 text-base font-bold font-[karla]'>
                {navList.map((nav) => {
                    return (
                        <li key={nav.name} className=' hover:text-[--green]'>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
