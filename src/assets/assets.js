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
import mic_with_blue_bg from "./mic_with_blue_bg.svg"
import AIAvatar01 from "./AIAvatar01.svg"
import ReadingPassage from "./ReadingPassage.svg"

const assets ={
  ReadingPassage,
  restore,
  AIAvatar01,
  AudioPlayer,
  mic_with_blue_bg,
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


// ... your existing image imports and default export ...

// Export a list of parts (one object per part)
export const partDataList = [
  // =====================================
  // PART 1
  // =====================================
  {
    title: "Part 1",
    description: "Listening Part 1 – Answer all 10 questions.",
    questions: [
      // MCQs 1–6
      {
        number: 1,
        type: "mcq",
        question: "Part 1 - Question 1",
        options: [
          { label: "A", text: "Option A1" },
          { label: "B", text: "Option B1" },
          { label: "C", text: "Option C1" },
        ],
      },
      {
        number: 2,
        type: "mcq",
        question: "Part 1 - Question 2",
        options: [
          { label: "A", text: "Option A2" },
          { label: "B", text: "Option B2" },
          { label: "C", text: "Option C2" },
        ],
      },
      {
        number: 3,
        type: "mcq",
        question: "Part 1 - Question 3",
        options: [
          { label: "A", text: "Option A3" },
          { label: "B", text: "Option B3" },
          { label: "C", text: "Option C3" },
        ],
      },
      {
        number: 4,
        type: "mcq",
        question: "Part 1 - Question 4",
        options: [
          { label: "A", text: "Option A4" },
          { label: "B", text: "Option B4" },
          { label: "C", text: "Option C4" },
        ],
      },
      {
        number: 5,
        type: "mcq",
        question: "Part 1 - Question 5",
        options: [
          { label: "A", text: "Option A5" },
          { label: "B", text: "Option B5" },
          { label: "C", text: "Option C5" },
        ],
      },
      {
        number: 6,
        type: "mcq",
        question: "Part 1 - Question 6",
        options: [
          { label: "A", text: "Option A6" },
          { label: "B", text: "Option B6" },
          { label: "C", text: "Option C6" },
        ],
      },

      // Input questions 7–10
      {
        number: 7,
        type: "input",
        labelLeft: "Customer’s name:",
        placeholder: "Enter name",
      },
      {
        number: 8,
        type: "input",
        labelLeft: "Address:",
        placeholder: "Enter address",
      },
      {
        number: 9,
        type: "input",
        labelLeft: "Destination:",
        placeholder: "Enter destination",
      },
      {
        number: 10,
        type: "input",
        labelLeft: "Contact number:",
        placeholder: "Home number",
      },
    ],
  },

  // =====================================
  // PART 2
  // =====================================
  {
    title: "Part 2",
    description: "Listening Part 2 – Answer all 10 questions.",
    questions: [
      // MCQs 1–6
      {
        number: 1,
        type: "mcq",
        question: "Part 2 - Question 1",
        options: [
          { label: "A", text: "Choice A1" },
          { label: "B", text: "Choice B1" },
          { label: "C", text: "Choice C1" },
        ],
      },
      {
        number: 2,
        type: "mcq",
        question: "Part 2 - Question 2",
        options: [
          { label: "A", text: "Choice A2" },
          { label: "B", text: "Choice B2" },
          { label: "C", text: "Choice C2" },
        ],
      },
      {
        number: 3,
        type: "mcq",
        question: "Part 2 - Question 3",
        options: [
          { label: "A", text: "Choice A3" },
          { label: "B", text: "Choice B3" },
          { label: "C", text: "Choice C3" },
        ],
      },
      {
        number: 4,
        type: "mcq",
        question: "Part 2 - Question 4",
        options: [
          { label: "A", text: "Choice A4" },
          { label: "B", text: "Choice B4" },
          { label: "C", text: "Choice C4" },
        ],
      },
      {
        number: 5,
        type: "mcq",
        question: "Part 2 - Question 5",
        options: [
          { label: "A", text: "Choice A5" },
          { label: "B", text: "Choice B5" },
          { label: "C", text: "Choice C5" },
        ],
      },
      {
        number: 6,
        type: "mcq",
        question: "Part 2 - Question 6",
        options: [
          { label: "A", text: "Choice A6" },
          { label: "B", text: "Choice B6" },
          { label: "C", text: "Choice C6" },
        ],
      },

      // Input 7–10
      {
        number: 7,
        type: "input",
        labelLeft: "Booking date:",
        placeholder: "Enter date",
      },
      {
        number: 8,
        type: "input",
        labelLeft: "Tour package:",
        placeholder: "Package name",
      },
      {
        number: 9,
        type: "input",
        labelLeft: "Group size:",
        placeholder: "Number",
      },
      {
        number: 10,
        type: "input",
        labelLeft: "Pickup point:",
        placeholder: "Enter location",
      },
    ],
  },

  // =====================================
  // PART 3
  // =====================================
  {
    title: "Part 3",
    description: "Listening Part 3 – Answer all 10 questions.",
    questions: [
      // MCQs 1–6
      {
        number: 1,
        type: "mcq",
        question: "Part 3 - Question 1",
        options: [
          { label: "A", text: "Option A1" },
          { label: "B", text: "Option B1" },
          { label: "C", text: "Option C1" },
        ],
      },
      {
        number: 2,
        type: "mcq",
        question: "Part 3 - Question 2",
        options: [
          { label: "A", text: "Option A2" },
          { label: "B", text: "Option B2" },
          { label: "C", text: "Option C2" },
        ],
      },
      {
        number: 3,
        type: "mcq",
        question: "Part 3 - Question 3",
        options: [
          { label: "A", text: "Option A3" },
          { label: "B", text: "Option B3" },
          { label: "C", text: "Option C3" },
        ],
      },
      {
        number: 4,
        type: "mcq",
        question: "Part 3 - Question 4",
        options: [
          { label: "A", text: "Option A4" },
          { label: "B", text: "Option B4" },
          { label: "C", text: "Option C4" },
        ],
      },
      {
        number: 5,
        type: "mcq",
        question: "Part 3 - Question 5",
        options: [
          { label: "A", text: "Option A5" },
          { label: "B", text: "Option B5" },
          { label: "C", text: "Option C5" },
        ],
      },
      {
        number: 6,
        type: "mcq",
        question: "Part 3 - Question 6",
        options: [
          { label: "A", text: "Option A6" },
          { label: "B", text: "Option B6" },
          { label: "C", text: "Option C6" },
        ],
      },

      // Inputs 7–10
      {
        number: 7,
        type: "input",
        labelLeft: "Course name:",
        placeholder: "Enter course",
      },
      {
        number: 8,
        type: "input",
        labelLeft: "Professor name:",
        placeholder: "Enter name",
      },
      {
        number: 9,
        type: "input",
        labelLeft: "Department:",
        placeholder: "Enter department",
      },
      {
        number: 10,
        type: "input",
        labelLeft: "Meeting time:",
        placeholder: "Enter time",
      },
    ],
  },

  // =====================================
  // PART 4
  // =====================================
  {
    title: "Part 4",
    description: "Listening Part 4 – Answer all 10 questions.",
    questions: [
      // MCQs 1–6
      {
        number: 1,
        type: "mcq",
        question: "Part 4 - Question 1",
        options: [
          { label: "A", text: "Option A1" },
          { label: "B", text: "Option B1" },
          { label: "C", text: "Option C1" },
        ],
      },
      {
        number: 2,
        type: "mcq",
        question: "Part 4 - Question 2",
        options: [
          { label: "A", text: "Option A2" },
          { label: "B", text: "Option B2" },
          { label: "C", text: "Option C2" },
        ],
      },
      {
        number: 3,
        type: "mcq",
        question: "Part 4 - Question 3",
        options: [
          { label: "A", text: "Option A3" },
          { label: "B", text: "Option B3" },
          { label: "C", text: "Option C3" },
        ],
      },
      {
        number: 4,
        type: "mcq",
        question: "Part 4 - Question 4",
        options: [
          { label: "A", text: "Option A4" },
          { label: "B", text: "Option B4" },
          { label: "C", text: "Option C4" },
        ],
      },
      {
        number: 5,
        type: "mcq",
        question: "Part 4 - Question 5",
        options: [
          { label: "A", text: "Option A5" },
          { label: "B", text: "Option B5" },
          { label: "C", text: "Option C5" },
        ],
      },
      {
        number: 6,
        type: "mcq",
        question: "Part 4 - Question 6",
        options: [
          { label: "A", text: "Option A6" },
          { label: "B", text: "Option B6" },
          { label: "C", text: "Option C6" },
        ],
      },

      // Inputs 7–10
      {
        number: 7,
        type: "input",
        labelLeft: "Topic:",
        placeholder: "Lecture topic",
      },
      {
        number: 8,
        type: "input",
        labelLeft: "Key term:",
        placeholder: "Enter key term",
      },
      {
        number: 9,
        type: "input",
        labelLeft: "Main point:",
        placeholder: "Main idea",
      },
      {
        number: 10,
        type: "input",
        labelLeft: "Speaker:",
        placeholder: "Name",
      },
    ],
  },
];
// src/data/writingTasks.ts

export const writingTasks = [
  {
    id: 1,
    title: "Task 1 - Academic Writing",
    minWords: 150,
    question: `
The chart below shows the percentage of households with different types of internet connection in a European country from 2010 to 2020.

Summarize the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.
    `
  },
  {
    id: 2,
    title: "Task 2 - Essay Writing",
    minWords: 250,
    question: `
Some people believe that unpaid community service should be made compulsory in high school.

Do you agree or disagree?

Write at least 250 words.
    `
  }
];
export const fakeAiResult = {
  overall: 7.5,
  criteria: [
    { label: "Task Achievement", score: 7 },
    { label: "Coherence & Cohesion", score: 8 },
    { label: "Lexical Resource", score: 7.5 },
    { label: "Grammar & Accuracy", score: 7 },
  ],
  strengths: [
    "Clear overview of main trends",
    "Good use of data to support points",
    "Appropriate paragraph structure",
  ],
  improvements: [
    "Include more specific data comparisons",
    "Use more varied vocabulary for trends",
    "Add a stronger conclusion",
  ],
};


export const readingparagraph = [
  {
    "paragraph1": {
      "section1": "The global transition toward renewable energy has become one of the most significant developments of the twenty-first century, driven by rising concerns about climate change, air pollution, and the long-term sustainability of fossil fuel resources. Over the past decade, technological improvements have made renewable sources such as solar, wind, and hydropower far more efficient and cost-effective than ever before. Solar panels, for example, have seen dramatic increases in energy conversion efficiency, allowing households, businesses, and governments to generate more electricity from the same amount of sunlight. Wind turbines have also evolved, becoming taller, stronger, and capable of capturing wind energy even in regions with lower wind speeds. These advancements have made renewable energy a practical alternative rather than an idealistic goal. In many parts of the world, renewable electricity is now cheaper to produce than coal or natural gas, which has encouraged countries to expand their clean energy infrastructure. At the same time, governments have introduced policies and incentives—such as tax reductions, financial subsidies, and investment grants—to encourage the adoption of green technologies and reduce dependency on fossil fuels. Despite this progress, several challenges still hinder the complete shift to renewable energy. One major issue is energy storage, as renewable sources depend on natural conditions like sunlight and wind, which are not constant. Researchers are developing advanced battery systems to store excess energy and provide a steady power supply during periods of low generation. Another challenge is the need for modern infrastructure; many developing regions lack the grid systems required to support large-scale renewable projects. However, continuous innovation, falling costs, and growing public awareness are helping to overcome these obstacles. As more nations commit to achieving carbon-neutral targets, renewable energy will play an increasingly central role in shaping the global energy landscape. Many experts believe that with sustained investment and technological progress, renewable sources could eventually supply the majority of the world’s electricity. This shift would not only reduce greenhouse gas emissions but also create millions of jobs in manufacturing, maintenance, and research, contributing to economic growth. Ultimately, the rise of renewable energy represents a crucial step toward building a cleaner, healthier, and more sustainable future for generations to come." ,

      "section2": "Solar photovoltaic (PV) technology has experienced the most dramatic cost reductions. According to the International Renewable Energy Agency (IRENA), the cost of solar PV has fallen by 89% since 2010. Wind power costs have also declined significantly, dropping by 70% over the same period. These cost reductions have made renewable energy competitive with traditional fossil fuel sources without subsidies in many markets",
      "section3": "he global transition to renewable energy sources has accelerated dramatically over the past decade. Solar and wind power, once considered expensive alternatives to fossil fuels, have become the cheapest sources of electricity in most parts of the world. This remarkable transformation has been driven by technological advances, government policies, and changing economic conditions.",

      "section4": "Government policies have also supported the widespread adoption of renewable energy. Many nations offer subsidies, tax reductions, or low-interest loans to encourage investment in clean technologies. These incentives help reduce the initial cost of installing renewable systems, making them more attractive to the public. In addition, governments have implemented regulations to reduce carbon emissions, further promoting the use of sustainable energy. Such measures have strengthened global efforts to transition away from fossil fuels.",
      "section5": "Solar photovoltaic (PV) technology has experienced the most dramatic cost reductions. According to the International Renewable Energy Agency (IRENA), the cost of solar PV has fallen by 89% since 2010. Wind power costs have also declined significantly, dropping by 70% over the same period. These cost reductions have made renewable energy competitive with traditional fossil fuel sources without subsidies in many markets",
      "section6": "The global shift toward renewable energy has accelerated rapidly as countries search for sustainable solutions to rising environmental challenges. Increasing awareness of climate change has encouraged governments and communities to adopt cleaner energy sources. Solar and wind energy have become central to this transition, offering reliable alternatives to traditional fossil fuels. As demand for energy continues to rise, renewable sources are seen as essential for long-term stability. This growing interest reflects a global commitment to reducing pollution and protecting the planet.",

      "section7": "Government policies have also supported the widespread adoption of renewable energy. Many nations offer subsidies, tax reductions, or low-interest loans to encourage investment in clean technologies. These incentives help reduce the initial cost of installing renewable systems, making them more attractive to the public. In addition, governments have implemented regulations to reduce carbon emissions, further promoting the use of sustainable energy. Such measures have strengthened global efforts to transition away from fossil fuels.",

      "section8": "The global shift toward renewable energy has accelerated rapidly as countries search for sustainable solutions to rising environmental challenges. Increasing awareness of climate change has encouraged governments and communities to adopt cleaner energy sources. Solar and wind energy have become central to this transition, offering reliable alternatives to traditional fossil fuels. As demand for energy continues to rise, renewable sources are seen as essential for long-term stability. This growing interest reflects a global commitment to reducing pollution and protecting the planet.",
      "section9":"Despite impressive progress, several challenges still affect the expansion of renewable energy. In some regions, the infrastructure needed to support large-scale projects is underdeveloped. Energy storage remains a significant obstacle, as renewable sources depend on weather conditions. These limitations can make it difficult to provide consistent power in certain areas. However, ongoing research is helping to improve storage capacity and grid reliability. As these technologies advance, renewable energy will become even more dependable.",
       "section10": "The global transition toward renewable energy has become one of the most significant developments of the twenty-first century, driven by rising concerns about climate change, air pollution, and the long-term sustainability of fossil fuel resources. Over the past decade, technological improvements have made renewable sources such as solar, wind, and hydropower far more efficient and cost-effective than ever before. Solar panels, for example, have seen dramatic increases in energy conversion efficiency, allowing households, businesses, and governments to generate more electricity from the same amount of sunlight. Wind turbines have also evolved, becoming taller, stronger, and capable of capturing wind energy even in regions with lower wind speeds. These advancements have made renewable energy a practical alternative rather than an idealistic goal. In many parts of the world, renewable electricity is now cheaper to produce than coal or natural gas, which has encouraged countries to expand their clean energy infrastructure. At the same time, governments have introduced policies and incentives—such as tax reductions, financial subsidies, and investment grants—to encourage the adoption of green technologies and reduce dependency on fossil fuels. Despite this progress, several challenges still hinder the complete shift to renewable energy. One major issue is energy storage, as renewable sources depend on natural conditions like sunlight and wind, which are not constant. Researchers are developing advanced battery systems to store excess energy and provide a steady power supply during periods of low generation. Another challenge is the need for modern infrastructure; many developing regions lack the grid systems required to support large-scale renewable projects. However, continuous innovation, falling costs, and growing public awareness are helping to overcome these obstacles. As more nations commit to achieving carbon-neutral targets, renewable energy will play an increasingly central role in shaping the global energy landscape. Many experts believe that with sustained investment and technological progress, renewable sources could eventually supply the majority of the world’s electricity. This shift would not only reduce greenhouse gas emissions but also create millions of jobs in manufacturing, maintenance, and research, contributing to economic growth. Ultimately, the rise of renewable energy represents a crucial step toward building a cleaner, healthier, and more sustainable future for generations to come." ,
    }
  },
  {
    "paragraph2": {
      "section1": "Solar and wind energy have shown particularly rapid development in recent years.",
      "section2": "Technological improvements have greatly reduced the cost of producing renewable energy equipment.",
      "section3": "This has made clean energy affordable for many countries, businesses, and households.",
      "section4": "As a result, renewable energy is no longer viewed as an expensive option.",
      "section5": "Instead, it is increasingly recognised as a practical and efficient solution to rising energy demands."
    }
  },
  {
    "paragraph3": {
      "section1": "Government support has played an important role in encouraging the use of renewable energy.",
      "section2": "Many nations now offer financial incentives to make clean energy more accessible.",
      "section3": "Such policies help reduce the upfront cost of installing renewable systems.",
      "section4": "These efforts have increased public interest and encouraged private investments.",
      "section5": "Overall, government actions continue to accelerate the shift towards more sustainable energy sources."
    }
  },
  {
    "paragraph4": {
      "section1": "Despite progress, several challenges still limit the global expansion of renewable energy.",
      "section2": "Some regions lack the necessary infrastructure to support large-scale renewable projects.",
      "section3": "Energy storage remains a significant obstacle as technology continues to evolve.",
      "section4": "However, ongoing research is working to solve these problems and improve system reliability.",
      "section5": "Experts believe that with continued innovation, renewable energy will become even more efficient and widely used in the future."
    }
  }
];
