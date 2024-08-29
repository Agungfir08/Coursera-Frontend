import Button from './Button';
import Card from './Card';
import SaladImage from '../assets/icons/greek salad.jpg';
import BruchettaImage from '../assets/icons/bruchetta.svg';
import LemonImage from '../assets/icons/lemon dessert.jpg';

export default function Main() {
    const Menu = [
        {
            name: 'Greek Salad',
            price: '$100',
            description:
                'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: SaladImage,
        },
        {
            name: 'Bruchetta',
            price: '$150',
            description:
                'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            image: BruchettaImage,
        },
        {
            name: 'Lemon Dessert',
            price: '$120',
            description:
                'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            image: LemonImage,
        },
    ];

    return (
        <section className="flex flex-col gap-16">
            <div className="flex justify-between">
                <h1 className="text-6xl font-[Merkari]">This Week Specials!</h1>
                <Button text="Online Menu" />
            </div>
            <div className=" flex justify-between">
                {Menu.map((menuItem) => {
                    return (
                        <Card
                            key={menuItem.name}
                            name={menuItem.name}
                            price={menuItem.price}
                            description={menuItem.description}
                            image={menuItem.image}
                        />
                    );
                })}
            </div>
        </section>
    );
}
