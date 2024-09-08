import Footer from './components/Home/Footer';
import Nav from './components/Home/Nav';
import Main from './components/Home/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reservation from './components/Reservation/Reservation';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/reservation',
            element: <Reservation />,
        },
    ]);

    return (
        <>
            <ToastContainer />
            <Main>
                <RouterProvider router={route} />
            </Main>
        </>
    );
}

export default App;
