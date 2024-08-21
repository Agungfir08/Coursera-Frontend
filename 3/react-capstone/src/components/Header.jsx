import Button from "./Button";


export default function Header() {
  return (
    <header className=" bg-[--green] py-6">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Button text='Reserve Online'/>
    </header>
  )
}
