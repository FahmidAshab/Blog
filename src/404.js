import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page404 = () => {
    return (
        <div className="page-404">
            <h2>Sorry</h2>
            <p>This page does not exist</p>
            <Link to='/'>Home Page</Link>
        </div>
    );
}
 
export default Page404;