export default function Dropdown({
    option,
    name,
    text,
    onChange,
    value,
    error,
}) {
    return (
        <div className="flex flex-col gap-2 font-[Karla]">
            <label htmlFor={name} className="text-white text-lg font-bold">
                {text}
            </label>
            <select
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                className={`rounded-lg border-2 ${
                    error ? 'border-red-500' : 'border-gray-300'
                } w-[450px] h-[40px] px-4 block active:outline-none focus:outline-gray-400`}>
                <option value="" disabled hidden>
                    Select {text}
                </option>
                {option.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
            {error && (
                <p className="font-[Karla] text-red-500 font-bold text-sm">
                    {error}
                </p>
            )}
        </div>
    );
}
