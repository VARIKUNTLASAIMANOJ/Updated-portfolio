// Portfolio Data - Edit this file to customize your portfolio content

export const personalInfo = {
  name: "Sai Manoj Varikuntla",
  // title: "AI Developer | Full Stack Engineer | ML Enthusiast",
  intro: "Passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.",
  email: "varikuntlasaimanoj@gmail.com",
  phone: "+91-9100161401",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/VARIKUNTLASAIMANOJ",
  linkedin: "https://www.linkedin.com/in/varikuntla-sai-manoj-082b782b8/",
  profileImage: "/assets/profile.jpg", // Add your profile image to public/assets/
};

export const aboutMe = {
  description: `I am a passionate AI Developer and Full Stack Engineer with a strong foundation in machine learning, 
  data science, and modern web technologies. With expertise in building scalable applications and intelligent systems, 
  I strive to create solutions that make a meaningful impact.

  My journey in technology has led me to work on diverse projects ranging from natural language processing systems 
  to full-stack web applications. I am constantly learning and adapting to new technologies, with a particular 
  interest in Large Language Models, prompt engineering, and emerging AI frameworks.`,
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science - AI & ML",
    institution: "Malla Reddy University",
    year: "2022 - 2026",
    // description: "Graduated with honors. Focus on algorithms, data structures, and software engineering.",
  },
  {
    degree: "Intermediate Education",
    institution: "Narayana Junior College",
    year: "2020 - 2022",
    // description: "Specialized in Artificial Intelligence and Machine Learning. Research focus on Natural Language Processing.",
  },
  {
    degree: "High School",
    institution: "Gowtham Model School",
    year: "2020",
  }
];

export const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    skills: ["Python", "Java"],
  },
  {
    id: "dataml",
    name: "Data Analytics & ML",
    skills: ["Pandas", "NumPy", "Matplotlib", "NLP"],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: ["HTML", "CSS", "Streamlit", "React.js"],
  },
  {
    id: "ai",
    name: "AI Frameworks & Concepts",
    skills: ["RAG", "LangChain", "Prompt Engineering", "API Integrations"],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "MySQL", "PowerBI", "GCP"],
  },
];

export const projects = [
  {
    title: "ShopScribe",
    description: "• Developed ShopScribe, an AI-powered shopping assistant that analyzes e-commerce product reviews using advanced sentiment analysis and NLP techniques.\n• Implemented fake review detection, trust scoring, and temporal trend analysis to ensure review credibility and transparency.\n• Built features for keyphrase extraction, review summarization, and side-by-side product comparison to deliver actionable insights.\n• Integrated web scraping (Firecrawl) and AI-based data structuring with Google Gemini, enabling personalized recommendations through a user-friendly interface.",
    image: "/assets/project.jpg",
    techStack: ["Python", "Streamlit", "Gemini API", "FireCrawl"],
    liveDemo: "https://demo.example.com",
    github: "https://github.com/VARIKUNTLASAIMANOJ/ShopScribe",
  },
  {
    title: "Nova AI",
    description: "• Developed Nova AI, an intelligent chatbot powered by the Google Gemini API for smart and contextual responses.\n• Integrated voice input and text-to-speech to enable natural, hands-free user interaction.\n• Implemented PDF processing and real-time weather integration to enhance practical usability.\n• Designed custom AI personas, smart reply suggestions, and multimodal interaction for personalized conversational experiences.",
    image: "/assets/project2.jpg",
    techStack: ["Python", "Streamlit", "Gemini API", "AI"],
    liveDemo: "https://nova-ai-mjappzzq7naudqp2hhmmje9.streamlit.app/",
    github: "https://github.com/VARIKUNTLASAIMANOJ/Nova-AI",
  },
  {
    title: "Beyond-Horizon",
    description: "• Built Beyond Horizon, a sophisticated space exploration web app using React 18 + TypeScript, Three.js (React Three Fiber), and Framer Motion for interactive 3D visuals and smooth animations.\n• Developed immersive features including real-time planet orbits, interactive solar system visualizations, and engaging 3D space environments.\n• Implemented rich content modules such as a space mission database, latest discoveries catalog, and a physics equations explorer for educational value.\n• Integrated a secure contact system with Resend API and applied Tailwind CSS for responsive design, showcasing strong full-stack and modern web development expertise.",
    image: "/assets/project3.jpg",
    techStack: ["React", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://beyond-horizon-dusky.vercel.app/",
    github: "https://github.com/VARIKUNTLASAIMANOJ/Beyond-Horizon",
  },
  // {
  //   title: "Cyber Attack Prediction System",
  //   description: "An ML-powered system for predicting and preventing cyber attacks. Uses advanced pattern recognition and real-time threat intelligence for proactive security.",
  //   image: "/assets/project4.jpg",
  //   techStack: ["Python", "Scikit-learn", "FastAPI", "React", "Redis"],
  //   liveDemo: "https://demo.example.com",
  //   github: "https://github.com/yourusername/project4",
  // },
];

export const achievements = [
  {
    year: "2026",
    title: "Hackathon Winner - AgentX",
    description: "AgentX 24-Hour Innovation Hackathon Winner (Business Automation), Anurag University, Salesforce; designed and implemented an AI-driven customer onboarding & CRM workflow using Agentforce and Data Cloud.",
  },
  {
    year: "2025",
    title: "Research Publication",
    description: "Published paper on “AI-Powered Shopping Assistants Using Sentiment Analysis” in the International Journal of All Research Education and Scientific Methods (IJARESM).",
  },
  {
    year: "2024",
    title: "Hackathon Runner-Up - IEEE",
    description: "National-Level Hackathon Runner-Up (IEEE), Malla Reddy University; engineered an AI-powered chatbot using OpenAI API with dual-model inference for response optimization, implemented a Pomodoro-based productivity module, and developed a real-time drowsiness detection system using OpenCV and computer vision",
  },
  // {
  //   year: "2022",
  //   title: "Hackathon Winner - ETHGlobal",
  //   description: "First place for building a decentralized AI marketplace that enables secure model sharing.",
  // },
];

export const certifications = [
  {
    name: "Postman API Fundamentals Student Expert",
    platform: "Postman"
  },
  {
    name: "Introduction to Python Programming",
    platform: "Coursera"
  },
  {
    name: "Introduction to Data Analytics",
    platform: "Coursera"
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
