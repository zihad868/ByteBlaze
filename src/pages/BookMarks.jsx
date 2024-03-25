import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../components/BlogCard";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
    },[])

    const handleDelete = (id) =>{
        deleteBlog(id);
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
    }

    return (
        <div className="grid justify-center gap-4 p-2 mt-4 grid-cols-1 py-2 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete ={handleDelete} deletable={true} key={blog.id} blog={blog} />)
            }
        </div>
    );
};

export default BookMarks;