import Footer from './components/Home/Footer';
import Nav from './components/Home/Nav';
import Main from './components/Home/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reservation from './components/Reservation/Reservation';
import Notification from './components/UI/Notification';

function App() {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
        },
        {
            path: '/reservation',
            element: <Reservation />,
        },
    ]);

    return (
        <>
            <Notification />
            <Nav />
            <RouterProvider router={route} />
            <Footer />
        </>
    );
}

export default App;
