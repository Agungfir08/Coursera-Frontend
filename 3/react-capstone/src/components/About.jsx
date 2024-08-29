export default function About() {
    return (
        <section className="mt-20 mb-10">
            <div className="flex justify-between ">
                <div className=" max-w-[373px] flex flex-col gap-10">
                    <div>
                        <h1 className=" text-6xl font-bold font-[Markazi] text-[--yellow]">
                            Little Lemon
                        </h1>
                        <h4 className=" text-[40px] font-normal font-[Markazi]">
                            Chicago
                        </h4>
                    </div>
                    <p className="font-[Karla] text-xl font-bold text-justify">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit.{' '}
                    </p>
                </div>
                <div className="min-w-[456px] h-[445px] bg-slate-400"></div>
            </div>
        </section>
    );
}
