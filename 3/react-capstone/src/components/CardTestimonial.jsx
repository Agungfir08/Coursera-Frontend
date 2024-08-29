export default function CardTestimonial({ name, position, testimonial }) {
    return (
        <div className="bg-white w-[200px] h-[175px] rounded-xl p-4">
            <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center gap-2">
                    <div className="bg-gray-300 w-[34px] h-[34px] rounded-full"></div>
                    <div>
                        <h1 className=" font-[Karla] text-[12px] font-bold">
                            {name}
                        </h1>
                        <h2 className="font-[Karla] text-[12px] font-bold text-gray-400">
                            {position}
                        </h2>
                    </div>
                </div>
                <div>
                    <p className="font-[Karla] text-[12px] text-gray-400">
                        {testimonial}
                    </p>
                </div>
            </div>
        </div>
    );
}
