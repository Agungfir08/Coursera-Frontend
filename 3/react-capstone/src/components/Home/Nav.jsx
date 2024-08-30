import logo from '../../assets/icons/Logo.svg';
import { navList } from '../Menu';

export default function Nav() {
    return (
        <header>
            <nav className="container mx-auto xl:px-40 lg:px-16 flex items-center justify-between py-5">
                <img src={logo} />
                <ul className=" flex gap-4 text-base font-bold font-[karla]">
                    {navList.map((nav) => {
                        return (
                            <li
                                key={nav.name}
                                className=" hover:text-[--green]">
                                <a href={nav.link}>{nav.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
