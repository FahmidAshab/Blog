import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
    const [author, setAuthor]= useState('mario')
    const [isLoading, setLoading]= useState(false)
    const history= useHistory()

    const handleSubmit= (e)=> {

        e.preventDefault()

        const blog= {title, body, author}

        setLoading(true)
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added')
            setLoading(false)
            //history.go(-1)
            history.push('/')
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select 
                value={author} 
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog</button>}

            </form>
        </div>
    );
}
 
export default Create;