import { useParams, Link } from "react-router-dom";
import { blogData } from "../assets/BlogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="p-40 text-center text-red-600">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-28 px-5 font-sans">
      <Link to="/blog" className="text-blue-600 text-sm">← Back to Blogs</Link>

      <h1 className="text-4xl font-bold mt-5">{blog.title}</h1>
      <p className="text-gray-500 mt-2">{blog.date}</p>

      <img
        src={blog.image}
        className="w-full h-80 object-cover rounded-lg mt-6 shadow-[0_0_20px_#0EA5E91A]"
      />

      <p className="mt-8 text-gray-700 leading-relaxed text-lg">
        {blog.description}
      </p>
    </div>
  );
};

export default BlogDetails;
