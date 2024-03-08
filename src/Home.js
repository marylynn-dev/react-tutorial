import Bloglist from "./components/Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>Loading ...</div>}
            {blogs && <Bloglist blogs={blogs} title={'All Blogs'} ></Bloglist>
            }
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === "Marline")} title={"Marline's Blogs"}></Bloglist>
            }
        </div>
    );
}

export default Home;
