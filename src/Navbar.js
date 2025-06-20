import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"
                }}>Home</Link>
                <Link to="/create" style={{
                    // color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;