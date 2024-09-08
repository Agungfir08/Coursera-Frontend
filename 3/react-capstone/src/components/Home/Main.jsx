import Nav from './Nav';
import Footer from './Footer';

export default function Main({ children }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
}
