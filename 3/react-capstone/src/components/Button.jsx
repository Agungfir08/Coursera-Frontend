export default function Button({ text, onClick }) {
    return (
        <div
            className=' bg-[--yellow] w-[200px] max-h-[60px] py-4 rounded-lg hover:cursor-pointer font-[Karla] font-bold text-center text-lg'
            onClick={onClick}>
            {text}
        </div>
    );
}
