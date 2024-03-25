import { useLoaderData } from "react-router-dom";

const Author = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h3>{blog.user.name}</h3>
        </div>
    );
};

export default Author;