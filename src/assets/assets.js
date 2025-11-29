import achivement from "./achivment.png"
import average_score from "./average_score.png"
import client from "./client.png"
import authentic from "./Exam-Authentic.png"
import facebook from "./facebook.png"
import instgram from "./instgram.png"
import linkdin from "./Linkdin.png"
import listing from "./listing.png"
import navbarlogo from "./navbarlogo.png"
import people from "./people.png"
import reading from "./reading.png"
import right_side_icon from "./right_side_icon.png"
import secure from "./Secure.png"
import singuplog from "./singinSingup_logo.png"
import speaking from "./speaking.png"
import student from "./student.png"
import student2 from "./stundet2.png"
import student3 from "./student3.png"
import student4 from "./student4.png"
import student5 from "./student5.jpg"
import student6 from "./student6.jpg"
import time from "./time.png"
import successrate from "./success_rate.png"
import twitter from "./twitter.png"
import writing from "./writing.png"
import top_Achivment from "./top_Achivment.png"
import correct from "./correct.png"
import featuredBlogImage from "./featured-blog.jpg"
import footer_logo from "./footer_logo-transprant.png"
import listing1 from "./listing.png"
import reading1 from "./reading1.png"
import writing1 from "./writting1.png"
import speaking1 from "./speaking1.png"
import readingforielts from "./readingforielts.svg"
import writingforielts from "./writtingforielts.svg"
import speakingforielts from "./speakingforielts.svg"
import listinginfroielts from "./listingforielts.svg"
import listingrecent from "./listingrecent.svg"
import writingrecent from "./writtingrecent.svg"
import speakingrecent from "./speakingrecent.svg"
import readingrecent from "./readingrecent.svg"
import recentActivity from "./recentActivite.svg"
import leftarrow from "./leftarrow.svg"
import Autosave from "./Auto-save.svg"
import AudioPlayer from "./audioPlayer.svg"
import restore from "./restore.svg"
const assets ={
  restore,
  AudioPlayer,
  Autosave,
  recentActivity,
  leftarrow,
  listingrecent,
  writingrecent,
  speakingrecent,
  readingrecent,
  readingforielts,
  writingforielts,
  speakingforielts,
  listinginfroielts,
    achivement,
    correct,
    average_score,
    client,
    authentic,
    facebook,
    instgram,
    footer_logo,
    linkdin,
    listing,
    navbarlogo,
    people,
    reading,
    right_side_icon,
    singuplog,
    secure,
    speaking,
    student,
    student2,
    student3,
    student4,
    student5,
    student6,
    time,
    successrate,
    twitter,
    writing,
    top_Achivment,
    featuredBlogImage,
    listing1,
    reading1,
    writing1,
    speaking1
}
export default assets

export const cards = [
    {
      icon: assets.people,
      number: 500,
      title: "Students Enrolled",
      description: "Total number of active students",
    },
    {
      icon: assets.successrate,
      number: "92%",
      title: "Success Rate",
      description: "Achieve target scores",
    },
    {
      icon: assets.achivement,
      number: "7.5+",
      title: "Average Score",
      description: "Band 7-9 guaranteed",
    },
    {
      icon: assets.secure,
      number: "100%",
      title: "Secure",
      description: "Money-back guarantee",
    },
  ];

export const navItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "reviews", label: "Reviews" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
  ];

  export const publicNavItems = [
  { label: "Home", to: "home" },
  { label: "Features", to: "features" },
  { label: "Reviews", to: "reviews" },
  { label: "Pricing", to: "pricing" },
];

export const dashboardNavItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Listing", path: "/listing" },
  { label: "Writing", path: "/writing" },
  { label: "Speaking", path: "/speaking" },
  { label: "Mock Test", path: "/mock-test" },
  { label: "Profile", path: "/profile" },
];

export const userData = {
  name: "John Doe",
  score: 8.5,
};//hi
export const scoreCardsData = [
  {
    title: "Listening",
    icon: "🎧",
    score: "28/40",
    band: 7,
    extra: "Focus on Q15-20: 60% accuracy",
    progress: 70,

  },
  {
    title: "Reading",
    icon: "📚",
    score: "32/40",
    band: 7.5,
    extra: "Excellent performance!",
    progress: 80,
    advice: "",
  },
  {
    title: "Writing",
    icon: "✍️",
    score: 7.5,
    band: "Task 1: 7.0, Task 2: 8.0",
    extra: "Focus on coherence & cohesion",
    progress: 75,
    advice: "",
  },
  {
    title: "Speaking",
    icon: "🎤",
    score: "Band 6.5",
    band: "Fluency: 7.0, Pronunciation: 6.0",
    extra: "Practice linking sentences",
    progress: 65,
    advice: "",
  },
];


