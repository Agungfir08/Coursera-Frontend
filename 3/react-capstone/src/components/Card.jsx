import dishIcon from '../assets/icons/Dish icon.svg';

export default function Card({ name, price, description, image }) {
    return (
        <div className=' bg-[--secondgray] rounded-xl w-72'>
            <img src={image} className=' w-72 h-40 rounded-t-xl object-cover' />
            <div className='p-6 flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <h3 className='font-[Karla] text-lg font-bold'>{name}</h3>
                    <h3 className='font-[Karla] text-lg font-bold text-[--orange]'>
                        {price}
                    </h3>
                </div>
                <p className='font-[Karla] text-[--gray] h-32'>{description}</p>
                <div className='flex gap-4'>
                    <h3 className='font-[Karla] font-bold'>Order delivery</h3>
                    <img src={dishIcon} className=' w-5' />
                </div>
            </div>
        </div>
    );
}
