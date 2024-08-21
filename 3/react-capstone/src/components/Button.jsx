export default function Button({ text, onClick }) {
  return (
    <div className=" bg-[--yellow] px-3 py-2 w-fit rounded-md hover:cursor-pointer " onClick={onClick}>{text}</div>
  )
}