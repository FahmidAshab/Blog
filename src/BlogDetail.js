import { useParams } from "react-router-dom/cjs/react-router-dom"
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const {id}= useParams();
    const {data: blog,error,isLoading}= useFetch('http://localhost:8000/blogs/' + id)
    const history= useHistory()

    const handleDelte= ()=> {
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(()=> {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p><br />
                    <div>{blog.body}</div>
                    <button onClick={handleDelte}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails
