import classes from './navbar.module.css'

function Navbar() {
    return ( 
        <nav className={classes.nav}>
            <h2>room</h2>
            <ul>
                
                <li><a href="">home</a></li>
                <li><a href="">shop</a></li>
                <li><a href="">about</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </nav>
     );
}

export default Navbar;