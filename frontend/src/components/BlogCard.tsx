import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-6 bg-white shadow-lg rounded-lg transition-all transform hover:scale-100 hover:shadow-xl border-b-2">
        <div className="flex items-center mb-4">
          <Avatar name={authorName} />
          <div className="ml-3">
            <div className="text-sm font-semibold text-gray-700">
              {authorName}
            </div>
            <div className="text-xs text-gray-500">{publishedDate}</div>
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{content.slice(0, 100) + "..."}</p>
        <div className="mt-4 text-gray-500 text-sm">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-gray-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-700 rounded-full ${
        size === "small" ? "w-8 h-8" : "w-12 h-12"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-sm" : "text-lg"
        } font-medium text-white`}
      >
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
