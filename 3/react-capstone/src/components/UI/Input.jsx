export default function Input({
    name,
    text,
    value,
    onChange,
    type,
    placeholder,
    error,
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
                className={`rounded-lg border-2 w-[450px] h-[40px] px-4 active:outline-none focus:outline-gray-400 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
                {...props}
            />
            {error && (
                <p className="font-[Karla] text-red-500 font-bold text-sm">
                    {error}
                </p>
            )}
        </div>
    );
}
