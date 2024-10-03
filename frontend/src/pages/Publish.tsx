import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Appbar />
      <div className="flex justify-center w-full pt-10">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create a New Blog Post
          </h2>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Title
            </label>
            <input
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="mt-1 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter your blog title"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Content
            </label>
            <TextEditor
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("medium_token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-600 rounded-lg focus:ring-4 focus:ring-blue-300 hover:bg-slate-700 transition-all"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-2">
      <textarea
        onChange={onChange}
        id="editor"
        rows={10}
        className="block w-full p-3 text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your blog content here..."
        required
      />
    </div>
  );
}
