import React from 'react';
import { CheckCircle2, BookOpen, Users, TrendingUp, RefreshCw } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-cyan-600">IELTS Revision</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We're on a mission to make IELTS preparation accessible, effective, and affordable for everyone.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-cyan-600 mb-2">100,000+</div>
            <div className="text-gray-600 font-medium">Practice Questions</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-cyan-600 mb-2">15,000+</div>
            <div className="text-gray-600 font-medium">Active Students</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-cyan-600 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-cyan-600 mb-2">7.5+</div>
            <div className="text-gray-600 font-medium">Average Target Score</div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Mission</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Traditional IELTS courses cost £500-2000 and require fixed schedules. We believe quality IELTS preparation should be accessible to everyone.
          </p>
          
          <div className="bg-white border-2 border-cyan-600 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              IELTS Revision was founded to modernize IELTS education with unlimited live challenges (student can), unlimited assignments, and AI-powered feedback. Unlike traditional courses that offer limited practice and one-time access, we provide unlimited access to authentic IELTS practice questions at a fraction of traditional course costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform features 100,000+ practice questions across all four IELTS skills—Listening, Reading, Writing, and Speaking—all curated by certified IELTS examiners. With instant feedback, detailed result analysis, and progress tracking, students can practice at their own pace, anytime, anywhere. Students can track their progress, identify weak areas, and improve with personalized learning paths. We eliminate the need for expensive courses by combining authentic content, modern tech, and one-time affordable access. Our goal of £25—our commitment is to continuously improve our platform based on teacher feedback and the latest research on IELTS testing practice.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12">
            What drives everything we do at IELTS Revision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <BookOpen className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Exam Authentic Content</h3>
                  <p className="text-gray-600">
                    All questions created by certified IELTS examiners to match real exam standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Student Centered Approach</h3>
                  <p className="text-gray-600">
                    Designed around each pace with flexible practice and instant feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    15,000+ students achieved their target band scores with our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <RefreshCw className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    Regular updates with new questions and features based on user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Students Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Students Choose Us</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">100,000+ exam-authentic questions created by certified IELTS examiners</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">24/7 access to practice tests with instant band scores and detailed explanations</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Instant feedback and detailed explanations for every question</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Band 9 model answers for Writing and Speaking students</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Advanced progress tracking and performance analytics</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Affordable pricing - less than 5% of the cost for the shelf</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">No fixed schedules - practice at your own pace</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">7-day money-back guarantee on all paid plans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}