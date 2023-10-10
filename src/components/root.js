import { NavLink, Outlet } from "react-router-dom";
import classes from './root.module.css';

const RootLayout = () => {
    return <>
        <ul>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products' className={({ isActive }) => isActive ? classes.active : undefined}>Products</NavLink>
            </li>
        </ul>
        <Outlet />
    </>
}

export default RootLayout;