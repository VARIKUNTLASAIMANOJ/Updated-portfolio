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
    id: "all",
    name: "All",
    skills: [
      "Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Deep Learning", "NLP",
      "LangChain", "LangGraph", "LLM Orchestration", "Vector Databases", "Prompt Engineering",
      "Python", "Java", "JavaScript", "TypeScript",
      "React", "FastAPI", "HTML/CSS",
      "MySQL", "PostgreSQL",
      "Docker", "Vercel",
    ],
  },
  {
    id: "aiml",
    name: "AI/ML",
    skills: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Deep Learning", "NLP"],
  },
  {
    id: "genai",
    name: "GenAI",
    skills: ["LangChain", "LangGraph", "LLM Orchestration", "Vector Databases", "Prompt Engineering"],
  },
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "fullstack",
    name: "FullStack",
    skills: ["React", "FastAPI", "HTML/CSS"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    id: "cloud",
    name: "Cloud & Deployment",
    skills: ["Docker", "Vercel"],
  },
];

export const tools = ["Postman", "Git", "GitHub", "PowerBI"];

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
    title: "Tejoraj",
    description: "• Developed SpaceAgent, an AI-driven space research platform that drafts, refines, and publishes structured research with automated title/keyword extraction.\n• Implemented inline citation cleanup, LaTeX source generation, and server-side PDF export with embedded NASA figures to ensure publication-ready outputs.\• Built interactive features: real-time research chat, section-by-section generation and editing, and automated content summarization and keyword extraction for faster drafting.\n• Integrated NASA imagery, arXiv sourcing, LangChain/Ollama LLM orchestration, and Supabase auth to deliver reproducible research workflows via a polished, space-themed web UI.",
    image: "/assets/project2.jpg",
    techStack: ["Python", "FastAPI", "LangChain", "React", "Docker"],
    liveDemo: "https://demo.example.com",
    github: "https://github.com/VARIKUNTLASAIMANOJ/Tejoraj",
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

export const internships = [
  {
    year: "2026",
    title: "AI/ML Intern",
    company: "International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)",
    description: "Developed an AI-powered research assistant focused on semantic search, intelligent document retrieval, and scalable knowledge extraction from agricultural research datasets. Engineered hybrid retrieval and validation pipelines to improve contextual relevance and factual accuracy while automating PDF ingestion and research data processing workflows.",
  },
];

export const achievements = [
  {
    year: "2026",
    title: "Hackathon Winner - AgentX",
    description: "AgentX 24-Hour Innovation Hackathon Winner (Business Automation), Anurag University, Salesforce; designed and implemented an AI-driven customer onboarding & CRM workflow using Agentforce and Data Cloud.",
  },
  {
    year: "2024",
    title: "Hackathon Runner-Up - IEEE",
    description: "National-Level Hackathon Runner-Up (IEEE), Malla Reddy University; engineered an AI-powered chatbot using OpenAI API with dual-model inference for response optimization, implemented a Pomodoro-based productivity module, and developed a real-time drowsiness detection system using OpenCV and computer vision",
  },
];

export const certifications = [
  {
    name: "The Complete Python Pro Bootcamp",
    platform: "Udemy"
  },

  {
    name: "Postman API Fundamentals Student Expert",
    platform: "Postman"
  },

  {
    name: "Complete Generative AI Course With Langchain and Huggingface",
    platform: "Udemy"
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
