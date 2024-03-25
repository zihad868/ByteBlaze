import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Content = () => {
  const blog = useLoaderData();

  const { cover_image, title, description, published_at, tags, body_html } = blog;
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

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <p></p>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
