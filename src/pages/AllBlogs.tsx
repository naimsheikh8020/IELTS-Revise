import { Link } from "react-router-dom";
import { blogData } from "../assets/BlogData";

const AllBlogs = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 px-6 font-sans">
      <h1 className="text-4xl font-bold mb-10">All Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <Link
                to={`/blog/${post.id}`}
                className=""
              >
                
             
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-[0_0_20px_#0EA5E90E] hover:shadow-[0_0_20px_#0EA5E91A]  hover:outline hover:outline-blue-200"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">{post.title}</h3>
                            <div className="flex justify-between items-center mt-5">
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>

              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 text-sm font-medium block mt-3 hover:bg-blue-200 p-1 px-3 rounded-2xl"
              >
                Read more →
              </Link>
              </div>
            </div>
          </div>
           </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
