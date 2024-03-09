import useFetch from "../useFetch";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, { method: 'DELETE' })
            .then(() => history.push('/'))
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <acrticle>
                    <h2>{blog.title} </h2>
                    <p>Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </acrticle>
            )}
        </div>
    );
}

export default BlogDetails;