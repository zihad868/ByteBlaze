import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const BlogCard = ({ blog, deletable,handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
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
          <p>{description}</p>
        </div>
      </Link>

      <div onClick={() => handleDelete(id)} className="absolute bg-primary p-3 hover:bg-pink-400 rounded-full hover:scale-105 -top-5 right-16">
        {deletable && 
        <div>
          <AiFillDelete size={20} className="text-secondary hover:text-primary" />
        </div>
        }
      </div>
    </div>
  );
};

export default BlogCard;
