import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import Header from "../components/Header";
import Footer from "./Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips to Achieve Band 8+ in IELTS Writing",
    description:
      "Master the art of IELTS writing with these proven strategies used by high-scoring students. Learn how to structure your essays, improve vocabulary, and avoid common mistakes.",
    category: "Writing",
    readTime: "8 min read",
    date: "15 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    url: "/blog/writing-tips",
  },
  {
    id: 2,
    title: "IELTS Listening: How to Improve Your Score in 30 Days",
    description:
      "Discover the techniques top students use to excel in IELTS Listening. From note-taking strategies to understanding different accents, this guide covers everything.",
    category: "Listening",
    readTime: "6 min read",
    date: "12 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    url: "/blog/listening-improvement",
  },
  {
    id: 3,
    title: "Complete Guide to IELTS Reading: Time Management & Strategy",
    description:
      "Learn how to tackle IELTS Reading passages efficiently. Master skimming, scanning, and answering techniques that will boost your score significantly.",
    category: "Reading",
    readTime: "10 min read",
    date: "10 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    url: "/blog/reading-guide",
  },
  {
    id: 4,
    title: "IELTS Speaking: Confident Communication for Band 7.5+",
    description:
      "Build confidence and fluency in your IELTS speaking test. Includes sample questions, model answers, and tips from IELTS examiners.",
    category: "Speaking",
    readTime: "7 min read",
    date: "8 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    url: "/blog/speaking-confidence",
  },
  {
    id: 5,
    title: "Understanding IELTS Band Scores: What Examiners Look For",
    description:
      "Demystify the IELTS scoring system. Learn exactly what examiners assess in each section and how to meet the criteria for your target band score.",
    category: "General",
    readTime: "5 min read",
    date: "5 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    url: "/blog/band-scores",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    // Add BlogPosting schema markup for SEO
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "IELTS Revision Blog",
      description:
        "Expert IELTS preparation tips, strategies, and insights to help achieve your target band score",
      url: "https://ieltsrevision.com/blog",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-schema";
    script.text = JSON.stringify(blogSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("blog-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              IELTS Preparation{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-blue-600 to-green-500">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips, strategies, and insights to help you achieve your
              target IELTS band score
            </p>
          </div>

          {/* Featured Post */}

          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div className="flex">
                <span>Featured</span>
                <div className="flex">
                  <img src="" alt="" />
                  <span>date</span>
                </div>
              </div>
              <div>
                <h2>10 Essential Tips to Achieve Band 8+ in IELTS Writing</h2>
                <p>asdkfasdfaskldhfashdkfhasdkjfhjk</p>

              </div>
              <div className="flex">
                <div className="flex">
                  <img src="" alt="" />
                  <span>8 min read</span>
                </div>
                <div>
                  <button>asdfasdfasd</button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-linear-to-br  from-blue-600 to-green-500 rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Ready to Start Practicing?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Put these tips into action with 100,000+ practice questions across
              all IELTS sections
            </p>
            <button
              className="text-lg bg-blue-600 text-white py-2 px-6 rounded-lg font-medium "
              onClick={() => navigate("/auth")}
            >
              Start Free Trial Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
