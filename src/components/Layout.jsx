import { Outlet } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className=''><Outlet /></div>
            <Footer />
        </>
    );
}
