import React from 'react'
import assets from '../assets/assets';
import { CheckCircle2,Star } from 'lucide-react';
import ResultTable from '../section/ResultTable';

const Reviews = () => {
  const students = [
    {
      name: "Sarah Johnson",
      location: "UK Student",
      beforeScore: "6.5",
      afterScore: "8.0",
      timeAgo: "2 weeks ago",
      testimonial: "The practice questions felt exactly like the real exam. Went from 6.5 to 8.0 in 3 months!",
      image: assets.student
    },
    {
      name: "Mohammed Ali",
      location: "UAE Student",
      beforeScore: "6.0",
      afterScore: "7.5",
      timeAgo: "3 weeks ago",
      testimonial: "Perfect exam practice. The questions are just like real IELTS. Got my target score!",
      image: assets.student
    },
    {
      name: "Emma Chen",
      location: "China Student",
      beforeScore: "7.0",
      afterScore: "8.5",
      timeAgo: "1 month ago",
      testimonial: "Best practice platform. Questions are authentic. Instant feedback helped me improve fast.",
      image: assets.student
    },
    {
      name: "Raj Patel",
      location: "India Student",
      beforeScore: "5.5",
      afterScore: "7.0",
      timeAgo: "1 week ago",
      testimonial: "Practice questions prepared me perfectly. Got Band 7.0 on first attempt!",
      image: assets.student
    },
    {
      name: "Maria Garcia",
      location: "Spain Student",
      beforeScore: "6.5",
      afterScore: "8.0",
      timeAgo: "2 months ago",
      testimonial: "Realistic exam questions. Great practice for all sections. Highly recommend!",
      image: assets.student
    },
    {
      name: "James Wilson",
      location: "Canada Student",
      beforeScore: "6.0",
      afterScore: "7.5",
      timeAgo: "3 weeks ago",
      testimonial: "Authentic questions. Clear explanations. Got Band 7.5 exactly as needed!",
      image: assets.student
    }
  ];

  return (
    <>
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-3">
            Student Results
          </h2>
          <p className="text-gray-500 text-base sm:text-lg text-center">
            Real students. Real scores.
          </p>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Header with Avatar and Verification */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-green-500"
                  />
                  <div>
                    <h3 className="font-semibold text-base">{student.name}</h3>
                    <p className="text-gray-500 text-sm">{student.location}</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              </div>

              {/* Rating and Time */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">{student.timeAgo}</span>
              </div>

              {/* Score Section */}
              <div className="bg-green-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-xs mb-1">Before</p>
                    <p className="text-red-500 text-2xl font-bold">{student.beforeScore}</p>
                  </div>
                  
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  <div className="text-center">
                    <p className="text-gray-600 text-xs mb-1">After</p>
                    <p className="text-green-600 text-2xl font-bold">{student.afterScore}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {student.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <ResultTable/>
    </>
  );
}

export default Reviews