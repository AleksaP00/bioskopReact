import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    return(
        <div className="navbar">
            <nav>
            <Link to="/" className='brand'><h1>My movie theatre</h1></Link> 
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
            </nav>
		</div>
    )
}
export default NavBar;