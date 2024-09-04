export default function Input({
    name,
    text,
    value,
    onChange,
    type,
    placeholder,
    props,
}) {
    return (
        <div className="flex flex-col gap-2 font-[Karla]">
            <label htmlFor={name} className="text-white text-lg font-bold">
                {text}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="rounded-lg border-2 border-gray-300 w-[450px] h-[40px] px-4 active:outline-none focus:outline-gray-400"
                {...props}
            />
        </div>
    );
}
