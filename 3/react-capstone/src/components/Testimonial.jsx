import Card from './Card';
import CardTestimonial from './CardTestimonial';

export default function Testimonial() {
    const testimonialPeople = [
        {
            name: 'Sarah',
            position: 'CEO Apple',
            testimonial:
                '“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”',
        },
        {
            name: 'John',
            position: 'CEO Amazon',
            testimonial:
                '“The best food in town! I am so happy with the service and the food.”',
        },
        {
            name: 'Jane',
            position: 'CEO Google',
            testimonial:
                '“The food is amazing, the service is great, the ambiance is perfect.”',
        },
        {
            name: 'Doe',
            position: 'CEO Facebook',
            testimonial:
                '“I have never tasted anything like this before. It is amazing!”',
        },
    ];

    return (
        <section className="mt-20">
            <div className=" bg-[--green] flex flex-col items-center py-28 gap-14">
                <h1 className=" font-[Markazi] text-5xl text-[--yellow] font-bold">
                    Testimonial
                </h1>
                <div className=" flex justify-between gap-6">
                    {testimonialPeople.map((person) => {
                        return (
                            <CardTestimonial
                                key={person.name}
                                name={person.name}
                                position={person.position}
                                testimonial={person.testimonial}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
