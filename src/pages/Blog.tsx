

// Fake JSON data
const blogData = [
  {
    id: 1,
    title: "10 Essential Tips to Achieve Band 8+ in IELTS Writing",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description:
      "Expert writing strategies to help you achieve your target band score.",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding IELTS Band Scores: What Examiners Look For",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Complete Guide to IELTS Reading: Time Management & Strategy",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "IELTS Listening: How to Improve Your Score in 30 Days",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "IELTS Listening: How to Improve Your Score in 30 Days",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding IELTS Band Scores: What Examiners Look For",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Complete Guide to IELTS Reading: Time Management & Strategy",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 9,
    title: "Complete Guide to IELTS Reading: Time Management & Strategy",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 10,
    title: "IELTS Listening: How to Improve Your Score in 30 Days",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Understanding IELTS Band Scores: What Examiners Look For",
    date: "04 July, 2024",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  
];

// Define the blog post type
type BlogPost = {
  id: number;
  title: string;
  date: string;
  image: string;
  description?: string;
  featured: boolean;
};

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
              <p className="mt-2 text-gray-700">{featuredPost.description}</p>
            )}
            <a href="#" className="text-blue-600 font-medium text-sm block mt-3">
              Read the full article
            </a>
          </div>
        </div>
      )}

      {/* Recent Blogs */}
      <div className="mt-16 flex items-center justify-between">
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-4 ">Recent blogs</h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          See all Blog →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
        {otherPosts.map((post: BlogPost) => (
          <div
            key={post.id}
            className="bg-white shadow-[0_0_20px_#0EA5E90E] rounded-xl overflow-hidden hover:shadow-[0_0_20px_#0EA5E91A]"
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
              <a href="#" className="text-blue-600 text-sm font-medium block mt-2">
                Read the full article
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
