import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const {cover_image, title, description, published_at, id} = blog
    return (
        <Link to={`/blog/${id}`}
            rel="noopener noreferrer"
            className="max-w-sm transition hover:scale-105 border-2 border-primary hover:border-secondary  mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(published_at).toLocaleString()}
              </span>
              <p>
               {description}
              </p>
            </div>
          </Link>
    );
};

export default BlogCard;