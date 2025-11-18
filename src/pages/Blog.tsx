import { Link } from "react-router";
import { blogData, BlogPost } from "../assets/BlogData";




// Modern functional component
const Blog = () => {
  const featuredPost = blogData.find((post) => post.featured);
  const otherPosts = blogData.filter((post) => !post.featured);

  return (
    <div className="w-full py-28 px-6 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          IELTS Preparation{" "}
          {/* <span className="bg-clip-text text-transparent bg-linear-to-br from-blue-600 to-green-500"> */}
          <span className="bg-clip-text text-transparent bg-blue-600">
            Blog
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert tips, strategies, and insights to help you achieve your
          target IELTS band score
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <Link to={`/blog/${featuredPost.id}`} className="">
             
            
        <div className="mt-10 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl  shadow-[0_0_20px_#0EA5E91A]">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-64 lg:h-80 object-cover rounded-lg rounded-r-none"
          />
          <div className="p-5 md:p-8">
            <p className="text-gray-500 text-sm">{featuredPost.date}</p>
            <h2 className="text-2xl font-semibold mt-2">{featuredPost.title}</h2>
            {featuredPost.description && (
              <p className="mt-2 text-gray-700 line-clamp-2">{featuredPost.description}</p>
            )}
            <Link to={`/blog/${featuredPost.id}`} className="w-fit text-blue-600 text-sm font-medium block mt-2  hover:bg-blue-200 hover:rounded-2xl p-1 px-3 -ml-3">
              Read the full article
            </Link>
          </div>
        </div>
        </Link>
      )}

      {/* Recent Blogs */}
      <div className="mt-16 flex items-center justify-between">
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-4 ">Recent blogs</h2>
        <Link to="/blogs" className="text-blue-600 text-sm font-medium hover:underline">
          See all Blog →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
        {otherPosts.map((post: BlogPost) => (
          <Link to={`/blog/${post.id}`} className="">
                  
               
          <div
            key={post.id}
            className="bg-white shadow-[0_0_20px_#0EA5E90E] rounded-xl overflow-hidden hover:shadow-[0_0_20px_#0EA5E91A] hover:outline hover:outline-blue-600 transition ease-in-out duration-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg leading-snug">{post.title}</h3>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                <Link to={`/blog/${post.id}`} className="w-auto text-blue-600 text-sm font-medium block mt-2  hover:bg-blue-200 hover:rounded-2xl p-1 px-3">
                  Read the full article
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

export default Blog;
