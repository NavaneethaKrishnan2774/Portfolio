import sms1 from "../assets/projects/sms1.png";
import sms2 from "../assets/projects/sms2.png";
import sms3 from "../assets/projects/sms3.png";
import sms4 from "../assets/projects/sms4.png";

import crowd1 from "../assets/projects/crowd1.png";
import crowd2 from "../assets/projects/crowd2.png";
import crowd3 from "../assets/projects/crowd3.png";
import crowd4 from "../assets/projects/crowd4.png";

import blog1 from "../assets/projects/blog1.png";
import blog2 from "../assets/projects/blog2.png";
import blog3 from "../assets/projects/blog3.png";
import blog4 from "../assets/projects/blog4.png";

import twitter1 from "../assets/projects/twitter1.png";
import twitter2 from "../assets/projects/twitter2.png";
import twitter3 from "../assets/projects/twitter3.png";
import twitter4 from "../assets/projects/twitter4.png";

import vandibond1 from "../assets/projects/vandibond1.png";
import vandibond2 from "../assets/projects/vandibond2.png";
import vandibond3 from "../assets/projects/vandibond3.png";

import artspot1 from "../assets/projects/artspot1.png";
import artspot2 from "../assets/projects/artspot2.png";

import portfolio1 from "../assets/projects/portfolio1.png";
import portfolio2 from "../assets/projects/portfolio2.png";
import portfolio3 from "../assets/projects/portfolio3.png";
import portfolio4 from "../assets/projects/portfolio4.png";
import portfolio5 from "../assets/projects/portfolio5.png";

import travel1 from "../assets/projects/travel1.png";
import travel2 from "../assets/projects/travel2.png";
import travel3 from "../assets/projects/travel3.png";
import travel4 from "../assets/projects/travel4.png";

import clock1 from "../assets/projects/clock1.png";
import clock2 from "../assets/projects/clock2.png";
const projects = [
  {
    id: 1,

    title: "Student Management System",

    category: "🎓 Enterprise Application",

    featured: true,

    image: sms1,

    images: [
      sms1,
      sms2,
      sms3,
      sms4,
    ],

    description:
      "Academic management platform for students, faculty, and administrators.",

    fullDescription:
      "Built a comprehensive academic management platform that streamlines student, faculty, and administrative operations. The system includes attendance tracking, assessments, placement management, communication modules, and role-based access control.",

    technologies: [
      "React",
      "Django",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    features: [
      "Attendance Tracking",
      "Placement Management",
      "Assessment Module",
      "Role Based Access Control",
      "Communication System",
    ],

    learnings: [
      "Full Stack Development",
      "Authentication",
      "Dashboard Design",
      "Database Architecture",
    ],

    github: [
      "https://github.com/NavaneethaKrishnan2774/stu-management-frontend",
      "https://github.com/NavaneethaKrishnan2774/stu-management-backend",
    ],
  },

  {
    id: 2,

    title: "Abnormal Crowd Behaviour Detection",

    category: "👁 Computer Vision",

    featured: true,

    image: crowd1,

    images: [
      crowd1,
      crowd2,
      crowd3,
      crowd4,
    ],

    description:
      "AI-powered surveillance system for crowd monitoring.",

    fullDescription:
      "Developed a computer vision-based surveillance system capable of detecting unusual crowd activities in real time. The solution analyzes video feeds to identify anomalies, overcrowding, and suspicious behavior.",

    technologies: [
      "Python",
      "OpenCV",
      "Scikit-Learn",
      "Machine Learning",
    ],

    features: [
      "Real-Time Monitoring",
      "Anomaly Detection",
      "Crowd Analytics",
      "Video Processing",
    ],

    learnings: [
      "Computer Vision",
      "Machine Learning",
      "Research Methodology",
      "Data Processing",
    ],

    github: [
      "https://github.com/NavaneethaKrishnan2774/Abnormal_crowd_behaviour_detection",
    ],
  },

  {
    id: 3,

    title: "Bus Scheduling System",

    category: "🚌 Transportation Technology",

    image: vandibond1,

    images: [
      vandibond1,
      vandibond2,
      vandibond3,
    ],

    description:
      "Intelligent transportation management platform.",

    fullDescription:
      "Developed an intelligent transportation management system that automates bus scheduling, route allocation, and timetable generation.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Route Allocation",
      "Schedule Generation",
      "Bus Management",
      "Resource Optimization",
    ],

    learnings: [
      "System Design",
      "Database Design",
      "Optimization Concepts",
    ],

    github: [
      "https://github.com/NavaneethaKrishnan2774/KRYZEN",
    ],
  },

  {
    id: 4,

    title: "Twitter Bot Detection",

    category: "🤖 Machine Learning",

    image: twitter1,

    images: [
      twitter1,
      twitter2,
      twitter3,
      twitter4,
    ],

    description:
      "ML-based bot account detection system.",

    fullDescription:
      "Built a machine learning application that detects and classifies bot accounts by analyzing user behavior and engagement metrics.",

    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Flask",
      "SQLite",
    ],

    features: [
      "Bot Detection",
      "Classification Models",
      "Behavior Analysis",
    ],

    learnings: [
      "Feature Engineering",
      "Classification Algorithms",
      "Data Analysis",
    ],

    github: [
      "https://github.com/NavaneethaKrishnan2774/twitter-bot-detection",
    ],
  },

  {
    id: 5,

    title: "Blog Application",

    category: "📝 Web Development",

    image: blog1,

    images: [
      blog1,
      blog2,
      blog3,
      blog4,
    ],

    description:
      "Full-stack blogging platform.",

    fullDescription:
      "Designed and developed a full-stack blogging platform that enables users to create, manage, and publish content through a secure interface.",

    technologies: [
      "Django",
      "MySQL",
      "HTML",
      "CSS",
    ],

    features: [
      "Authentication",
      "CRUD Operations",
      "Content Publishing",
    ],

    learnings: [
      "Django",
      "Backend Development",
      "Database Integration",
    ],

    github: [
      "https://github.com/NavaneethaKrishnan2774/Blog",
    ],
  },

  {
  id: 6,

  title: "Travel Guide Mobile App",

  category: "🎨 UI/UX Design",

  image: travel1,

  images: [
    travel1,
    travel2,
    travel3,
    travel4,
  ],

  description:
    "Figma-based mobile travel application design for tourism and transportation.",

  fullDescription:
    "Designed a complete mobile travel guide application using Figma. The application includes tourist attractions, hotel booking interfaces, transportation management, live bus tracking, route guidance, and intuitive navigation. The design focuses on usability, accessibility, and modern mobile user experiences.",

  technologies: [
    "Figma",
    "UI Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
  ],

  features: [
    "Tourist Places Module",
    "Hotel Booking Interface",
    "Transportation System",
    "Bus Tracking UI",
    "Mobile Navigation",
  ],

  learnings: [
    "Mobile UI Design",
    "User Experience Design",
    "Design Systems",
    "Figma Prototyping",
  ],

  github: [],
},

  {
    id: 7,

    title: "ArtSpot Technical Assessment",

    category: "🎨 Frontend Development",

    image: artspot1,

    images: [
      artspot1,
      artspot2,
    ],

    description:
      "Technical assessment focused on responsive UI development.",

    fullDescription:
      "Developed a responsive frontend application as part of a technical assessment, focusing on clean UI design, reusable components, and user experience.",

    technologies: [
      "Python",
      "Django",
      "GraphQL",
      "Graphene",
    ],

    features: [
      "GraphQL API Implementation",
      "CRUD Operations for Shop Management",
      "Schema & Resolver Development",
      "Data Validation and Error Handling",
      "Multiple Contact Information Support",
      "Django-Graphene Integration"
    ],

    learnings: [
     "GraphQL Query and Mutation Development",
     "Building APIs with Django and Graphene",
     "Schema Design and Data Modeling",
     "Resolver Implementation and Optimization",
     "Backend Architecture Best Practices",
     "API Testing and Debugging"
    ],

    github: ["https://github.com/NavaneethaKrishnan2774/Artspot_assesment"],
  },
  
  {
  id: 8,

  title: "Personal Portfolio",

  category: "💼 Portfolio Website",

  image: portfolio1,

  images: [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
  ],

  description:
    "Modern developer portfolio showcasing projects, certifications, research, and skills.",

  fullDescription:
    "Designed and developed a fully responsive personal portfolio website using React, Tailwind CSS, and Framer Motion. The portfolio includes interactive project galleries, certification previews, publication showcases, custom animations, smooth scrolling, and modern UI components.",

  technologies: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "React Type Animation",
    "EmailJS",
  ],

  features: [
    "Interactive Project Gallery",
    "Certificate Viewer",
    "Publication Showcase",
    "Responsive Design",
    "Custom Animations",
    "Modern UI/UX",
  ],

  learnings: [
    "Advanced React",
    "Animation Design",
    "Responsive Development",
    "Component Architecture",
  ],

  github: [
    "https://github.com/NavaneethaKrishnan2774/Portfolio",
  ],
    },

    {
  id: 9,

  title: "AR/VR Analog Clock",

  category: "🕶️ AR / VR Development",

  image: clock1,

  images: [
    clock1,
    clock2,
  ],

  description:
    "Real-time analog clock developed in Unity using C#.",

  fullDescription:
    "Developed an interactive analog clock in Unity 6 using C#. The project dynamically updates hour, minute, and second hands according to the system time. Implemented object transformations, rotations, and real-time synchronization using Unity's game engine.",

  technologies: [
    "Unity 6",
    "C#",
    "AR/VR",
    "Game Development",
    "3D Modelling"
  ],

  features: [
    "Real-Time Clock",
    "Dynamic Hand Rotation",
    "Unity Object Transformations",
    "System Time Synchronization",
    "Interactive 3D Scene"
  ],

  learnings: [
    "Unity Fundamentals",
    "C# Scripting",
    "Transform Components",
    "Real-Time Animation",
    "AR/VR Development"
  ],

  github: [],
},




];

export default projects;