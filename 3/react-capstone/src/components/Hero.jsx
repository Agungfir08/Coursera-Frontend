import Button from './UI/Button';
import RestauranImage from '../assets/icons/restauranfood.jpg';

export default function Hero() {
    return (
        <section className="max-h-[400px] bg-[--green] mb-20">
            <div className=" container mx-auto xl:px-40 lg:px-16 py-10 flex justify-between">
                <div className=" max-w-[340px] flex flex-col gap-[13px] ">
                    <div>
                        <h1 className=" text-6xl font-bold font-[Markazi] text-[--yellow]">
                            Little Lemon
                        </h1>
                        <h4 className=" text-[40px] font-normal text-white font-[Markazi]">
                            Chicago
                        </h4>
                    </div>
                    <p className="text-white font-[Karla] text-xl font-bold">
                        We are family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <Button text="Reserve Online" />
                </div>

                <img
                    src={RestauranImage}
                    alt="header image"
                    className="object-cover w-[375px] h-[425px] rounded-xl"
                />
            </div>
        </section>
    );
}
