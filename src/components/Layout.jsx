import { Outlet } from 'react-router';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className=''><Outlet /></div>
            <Footer />
        </>
    );
}
