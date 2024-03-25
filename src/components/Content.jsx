import { useLoaderData } from "react-router-dom";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, description, published_at, tags } = blog;
  return (
    <div
      rel="noopener noreferrer"
      className="border-2 border-opacity-30 border-primary   mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image}
      />

      {/* Tags */}
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag) => (
          <a
            key={tag}
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>

    </div>
  );
};

export default Content;
