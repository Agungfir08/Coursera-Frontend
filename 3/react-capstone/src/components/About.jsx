import LeftImage from '../assets/icons/Mario and Adrian b.jpg';
import RightImage from '../assets/icons/Mario and Adrian A.jpg';
export default function About() {
    return (
        <section className="my-20">
            <div className="container mx-auto xl:px-40 lg:px-16 flex justify-between ">
                <div className=" max-w-[373px] flex flex-col gap-10">
                    <div>
                        <h1 className=" text-6xl font-bold font-[Markazi] text-[--yellow]">
                            Little Lemon
                        </h1>
                        <h4 className=" text-[40px] font-normal font-[Markazi] text-[--green]">
                            Chicago
                        </h4>
                    </div>
                    <p className="font-[Karla] text-xl font-bold text-justify">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. <br /> Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit.{' '}
                    </p>
                </div>
                <div className="relative aspect-square w-full max-w-[450px]">
                    <img
                        className=" drop-shadow-lg absolute left-0 bottom-0 object-cover object-right w-[272px] h-[338px] rounded-xl"
                        src={LeftImage}
                    />

                    <img
                        className=" drop-shadow-lg absolute right-0 top-0 object-cover w-[272px] h-[338px] rounded-xl"
                        src={RightImage}
                    />
                </div>
            </div>
        </section>
    );
}
