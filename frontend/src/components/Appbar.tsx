import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-10 py-4">
        <Link
          to="/blogs"
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          Medium
        </Link>
        <div className="flex items-center">
          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5"
            >
              New Post
            </button>
          </Link>
          <Avatar size="big" name="Harkirat" />
        </div>
      </div>
    </div>
  );
};
