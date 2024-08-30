import LogoFooter from '../../assets/icons/logo-vertical-white.png';
import { navList } from '../Menu';
export default function Footer() {
    const menu = ['Address', 'Phone Number', 'Email'];
    const socialMedia = ['Facebook', 'Instagram', 'Twitter', 'TikTok'];
    return (
        <footer className="bg-[--green]">
            <div className="container mx-auto xl:px-40 lg:px-16 py-10 flex justify-between">
                <img className="w-[162px] " src={LogoFooter} />
                <div>
                    <h1 className="font-[Karla] text-xl font-bold text-[--yellow]">
                        Navigation
                    </h1>
                    {navList.map((item) => {
                        return (
                            <p
                                key={item.name}
                                className="font-[Karla] text-xl text-white hover:cursor-pointer">
                                {item.name}
                            </p>
                        );
                    })}
                </div>
                <div>
                    <h1 className="font-[Karla] text-xl font-bold text-[--yellow]">
                        Contact
                    </h1>
                    {menu.map((item) => {
                        return (
                            <p
                                key={item}
                                className="font-[Karla] text-xl text-white hover:cursor-pointer">
                                {item}
                            </p>
                        );
                    })}
                </div>
                <div>
                    <h1 className="font-[Karla] text-xl font-bold text-[--yellow]">
                        Social Media
                    </h1>
                    {socialMedia.map((item) => {
                        return (
                            <p
                                key={item}
                                className="font-[Karla] text-xl text-white hover:cursor-pointer">
                                {item}
                            </p>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
