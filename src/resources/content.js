import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ayesha",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Enthusiast & Developer",
  avatar: "/images/avatar.png",
  email: "ayeshamughal2162@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about AI, modern development practices, and share insights about my journey in tech. 
      Follow along as I explore the intersection of logic and creativity.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CodeVoyager007",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ayesha-mughal-260264342",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/Ayesha_Mughal21",
  },
  {
    name: "Hashnode",
    icon: "globe",
    link: "https://hashnode.com/@mughalsyntax",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@ayeshamughal21",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&to=ayeshamughal2162@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building experiences at the intersection of logic and creativity</>,
  featured: {
    display: true,
    title: <>Recent focus: <strong className="ml-4">Agentic AI</strong></>,
    href: "/work/exploring-agentic-ai",
  },
  subline: (
    <>
      I&apos;m Ayesha, a <b>16-year-old</b> developer passionate about AI and innovative technology.
              <br /> With 27+ certifications, I&apos;m constantly learning and building new experiences.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A passionate and persistent learner standing at the intersection of logic and creativity. 
        Currently delving into the intricacies of Agentic AI while maintaining a strong foundation 
        in modern development practices. With a flair for interaction, minimalism, and dark design, 
        I don&apos;t just build code — I build experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "GAO Tech",
        timeframe: "2023",
        role: "Assistant Squad Leader",
        achievements: [
          <>
            Started as an intern and got promoted to Assistant Squad Leader within 21 days,
            demonstrating leadership and technical capabilities.
          </>,
          <>
            Contributed to various projects during the 3-month internship, gaining hands-on
            experience in real-world development scenarios.
          </>,
        ],
        images: [],
      },
      {
        company: "In Plain English",
        timeframe: "July 2025 - Present",
        role: "Tech Blog Writer",
        achievements: [
          <>Writing in-depth, accessible tech blogs for a global audience.</>,
          <>Contributed articles on Python, JavaScript, and AI topics.</>,
          <>Joined the team as a writer on July 14, 2025.</>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Higher Secondary Education (Completed)",
        description: <>Completed HSC Part II (Pre-Engineering) in 2025 | Strong academic performance across both years</>,
      },
      { 
        name: "Secondary School Certificate",
        description: <>Completed SSC with Higher A Grade | Accelerated education - completed at age 13</>,
      },
      {
        name: "GIAIC",
        description: <>Currently in Quarter 4 of AI, Web3 & Metaverse Development Course (Started Feb 2024)</>,
      },
      {
        name: "Harvard CS50",
        description: <>
          - CS50&apos;s Introduction to AI with Python Certification<br/>
          - CS50x Puzzle Day Certificate with perfect 9/9 score<br/>
          - Demonstrated advanced problem-solving capabilities
        </>,
      },
      {
        name: "Professional Development",
        description: <>
          - GAOTek: 3-month internship with promotion to Assistant Squad Leader<br/>
          - freeCodeCamp: Responsive Web Design Certification<br/>
          - Great Learning: JavaScript and Graphic Design with Photoshop Certifications
        </>,
      },
      {
        name: "Additional Achievements",
        description: <>
          - School&apos;s primary speaker for events and ceremonies<br/>
          - Multiple academic competition participations<br/>
          - Perfect attendance record with consistent academic excellence
        </>,
      }
    ],
  },
  highlights: {
    display: true,
    title: "Highlights",
    sections: [
      {
        title: "What I'm focusing on",
        description: <>
          Building with Agentic AI patterns, tool-use orchestration, and production-grade evaluations. Recently exploring OpenRouter, LiteLLM, and streaming UIs.
        </>
      },
      {
        title: "How I work",
        description: <>
          Bias toward simple interfaces, fast feedback loops, and writing-first problem solving. Preferred stack: Next.js, TypeScript, Framer Motion.
        </>
      },
      {
        title: "Toolbox",
        description: <>
          Daily drivers include VS Code, GitHub, Postman, Vercel, and Canva. Comfortable shipping on short cycles and iterating with user feedback.
        </>
      },
      {
        title: "Outside of code",
        description: <>
          I enjoy speaking, puzzle challenges (like CS50x), and designing minimal, dark-themed UI concepts.
        </>
      }
    ]
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Proficient in HTML, CSS, JavaScript, TypeScript, Python, C/C++</>,
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: <>Next.js, Node.js, Tailwind CSS, Framer Motion, Streamlit, shadcn, Git & GitHub</>,
        images: [],
      },
      {
        title: "AI & Advanced Tech",
        description: <>Currently exploring Agentic AI, LiteLLM, OpenRouter, Swarm & Agents SDK, and Evaluator-Optimizer Patterns</>,
        images: [],
      },
    ],
  },
};

const certifications = {
  display: true,
  path: "/certifications",
  label: "Certifications",
  title: "Certifications",
  description: "A comprehensive collection of my professional certifications, awards, and achievements in technology and development.",
  images: [
    {
      src: "/certificates/CS50AI.pdf",
      alt: "Harvard CS50 Introduction to AI with Python",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/freecodecamp.png",
      alt: "freeCodeCamp Responsive Web Design",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/javascript.jpg",
      alt: "Great Learning JavaScript",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/CERTIFICATE OF WEB DEVELOPMENT from internship.pdf",
      alt: "Web Development Certificate",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/CERTIFICATE OF INTERNSHIP.pdf",
      alt: "Certificate of Internship",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/CERTIFICATE OF DIGITAL MARKETING from internship.pdf",
      alt: "Certificate of Digital Marketing",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/puzzel day.png",
      alt: "CS50x Puzzle Day 2024",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/kodeative.png",
      alt: "Kodeative Achievement",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/graphic-gl.pdf",
      alt: "Graphic Design - Great Learning",
      width: 200,
      height: 140,
    },
    {
      src: "/certificates/hp.pdf",
      alt: "HP Certificate",
      width: 200,
      height: 140,
    },
  ],
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: "Thoughts on development, AI, and technology",
  external: [
    {
      platform: "Hashnode",
      url: "https://hashnode.com/@mughalsyntax",
      description: "Technical articles and development insights"
    },
    {
      platform: "Medium",
      url: "https://medium.com/@ayeshamughal21",
      description: "In-depth articles about AI and programming"
    }
  ],
  tableOfContent: {
    display: true,
    subItems: true,
  },
};

const work = {
    display: true,
    path: "/work",
    label: "Work",
    title: "Projects",
    description: "My latest work",
    projects: [
      {
        slug: "momentum-ai-todo-app",
        title: "Momentum AI Todo App",
        summary: "An intelligent todo application that helps you stay organized and focused using AI-driven task management.",
        tech: ["Next.js", "AI Integration", "Tailwind CSS"],
        link: "https://momentum-ai-todo-app.vercel.app/",
        repo: "https://github.com/CodeVoyager007/hackathon-2/tree/main/phase-3",
        publishedAt: "2024-05-01",
      },
      {
        slug: "humanoid-robotics-course",
        title: "Physical AI Humanoid Robotics Course",
        summary: "A comprehensive educational platform for learning about physical AI and humanoid robotics.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        link: "https://physical-ai-humanoid-robotics-cours-six.vercel.app/",
        repo: "https://github.com/CodeVoyager007/Physical-AI-Humanoid-Robotics-Course",
        publishedAt: "2024-04-28",
      },
      {
        slug: "sm-marketing-real-estate",
        title: "SM Marketing Real Estate",
        summary: "A modern real estate marketing platform featuring property listings and interactive elements.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        link: "https://sm-markeing-real-estate.vercel.app/",
        repo: "https://github.com/CodeVoyager007/SM-Markeing-real-estate",
        publishedAt: "2024-04-25",
      },
      {
        slug: "study-forge-ai",
        title: "StudyForge AI",
        summary: "An intelligent study platform that transforms topics into personalized study materials including MCQs, flashcards, and summaries using advanced AI.",
        tech: ["Next.js", "OpenAI API", "Tailwind CSS", "React"],
        link: "https://study-forge-ai.vercel.app/",
        repo: "https://github.com/CodeVoyager007/study-forge-ai",
        publishedAt: "2024-04-15",
      },
      {
        slug: "prompt-vault",
        title: "PromptVault",
        summary: "A community-driven marketplace for discovering and sharing high-quality AI prompts for coding, writing, and business automation.",
        tech: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
        link: "https://prompt-vaulet-get-200-plus-prompts.vercel.app/",
        repo: "https://github.com/CodeVoyager007/prompt-vault",
        publishedAt: "2024-04-10",
      },
      {
        slug: "luxe-interiors",
        title: "Luxe Interiors",
        summary: "A premium interior design portfolio website featuring modern aesthetics, smooth transitions, and a curated gallery of living spaces.",
        tech: ["React", "Framer Motion", "Styled Components", "Vite"],
        link: "https://interior-design-website-indol-ten.vercel.app/",
        repo: "https://github.com/CodeVoyager007/interior-design-website",
        publishedAt: "2024-04-05",
      },
      {
        slug: "sugar-bliss-bakery",
        title: "Sugar Bliss Bakery",
        summary: "A delightful e-commerce frontend for a boutique bakery, featuring product galleries, special order forms, and nutritional information display.",
        tech: ["React", "Tailwind CSS", "Vercel"],
        link: "https://bakery-website-by-ayesha-mughal.vercel.app/",
        repo: "https://github.com/CodeVoyager007/bakery-website",
        publishedAt: "2024-04-01",
      },
      {
        slug: "course-search-engine",
        title: "Course Search Engine",
        summary: "A comprehensive search engine for programming courses aggregation, featuring filtering, search, and detailed metadata for self-learners.",
        tech: ["Next.js", "API Integration", "Tailwind CSS"],
        link: "https://courses-search-engine-by-ayesha-mughal.vercel.app/",
        repo: "https://github.com/CodeVoyager007/courses-search-engine",
        publishedAt: "2024-03-10",
      },
      {
        slug: "github-profile-viewer",
        title: "GitHub Profile Viewer",
        summary: "An elegant analytics tool that visualizes GitHub user data, repositories, and activity using the GitHub public API.",
        tech: ["React", "GitHub API", "Chart.js", "CSS Modules"],
        link: "https://github-profile-search-app-sage.vercel.app/",
        repo: "https://github.com/CodeVoyager007/github-profile-search",
        publishedAt: "2024-03-07",
      },
    ]
  }

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const display = {
  themeSwitcher: true,
  location: true,
  time: true,
  calendar: true,
  socials: true
};

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/contact": true,
  "/journey": true,
  "/certifications": true
};

const journey = {
  path: "/journey",
  label: "Journey",
  title: `Journey – ${person.name}`,
  description: "A timeline of my learning and achievements.",
  milestones: [
    {
      date: "January 2026",
      title: "GIAIC Hackathon: Evolution of Todo Applications",
      description: "A comprehensive 5-phase project demonstrating the evolution of task management software, from console to cloud-scale Kubernetes deployment.",
      achievements: [
        "Phase 1 & 2: Built robust console-based and modern web-based applications",
        "Phase 3: Developed an autonomous AI agent to manage tasks (Create, Edit, Delete)",
        "Phase 4: Containerized the application with Docker and deployed on local Kubernetes",
        "Phase 5: Orchestrated full-scale cloud deployment on Kubernetes"
      ],
      skills: ["Next.js", "AI Agents", "Docker", "Kubernetes", "Cloud Deployment"],
      type: "achievement"
    },
    {
      date: "December 2025",
      title: "GIAIC Hackathon: Spec-Driven RAG Chatbot",
      description: "Built a technical documentation platform and intelligent chatbot using a spec-driven methodology.",
      achievements: [
        "Developed a comprehensive technical book using Docusaurus",
        "Implemented a high-performance RAG (Retrieval-Augmented Generation) chatbot",
        "Mastered spec-driven development for reliable and predictable AI behavior"
      ],
      skills: ["Docusaurus", "RAG", "LLMs", "Spec-Driven Development"],
      type: "achievement"
    },
    {
      date: "2024",
      title: "Startup Challenge Winner at GIAIC",
      description: <>
        Won the Startup Challenge at Governor Initiative for AI and Computing (GIAIC). 
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7403769513621839872/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
          View Proof
        </a>
      </>,
      achievements: [
        "First place winner in the Startup Challenge",
        "Demonstrated innovative problem-solving and business acumen",
        "Recognized for potential impact in the tech industry"
      ],
      skills: ["Entrepreneurship", "Innovation", "Pitching", "Problem Solving"],
      type: "achievement"
    },
    {
      date: "2024 - Present",
      title: "GIAIC",
      description: "Currently in Quarter 4 of AI, Web3 & Metaverse Development Course , studying Prompt and context engineering and LLM development",
      achievements: [
        "Progressing through AI, Web3 & Metaverse Development Course",
        "Quarter 4 completion in progress",
        "Learning advanced AI and Web3 technologies",
        "Studying Prompt and context engineering and LLM development"
      ],
      skills: ["AI", "Web3", "Metaverse Development", "Blockchain", "Prompt and context engineering", "LLM development", "Agentic AI"],
      type: "learning"
    },
    {
      date: "2023 - 2025",
      title: "Higher Secondary Education (Completed)",
      description: "Completed HSC Part II in Computer Science with strong academic performance in 2025.",
      achievements: [
        "Strong academic performance in HSC Part I & II",
        "Specialized in Computer Science track",
        "Focusing on programming and computer fundamentals",
        "HSC Part II Completed"
      ],
      skills: ["Computer Science", "Programming", "Mathematics", "Physics"],
      type: "Finished"
    },
    {
      date: "July 2025 - Present",
      title: "In Plain English – Tech Blog Writer",
      description: "Joined In Plain English as a writer about tech blogs, contributing articles on Python, JavaScript, and AI topics for a global audience.",
      achievements: [
        "Joined the team as a writer on July 14, 2025",
        "Writing in-depth, accessible tech blogs for a global audience",
        "Contributed articles on Python, JavaScript, and AI topics"
      ],
      skills: ["Writing", "Technical Communication", "Python", "JavaScript", "AI"],
      type: "work"
    },
    {
      date: "2024",
      title: "Harvard CS50",
      description: "Completed multiple CS50 certifications and achievements",
      achievements: [
        "CS50's Introduction to AI with Python Certification",
        "CS50x Puzzle Day Certificate with perfect 9/9 score",
        "Demonstrated advanced problem-solving capabilities"
      ],
      skills: ["Python", "AI", "Problem Solving"],
      type: "achievement"
    },
    {
      date: "2024",
      title: "Professional Development",
      description: "Gained professional experience and certifications",
      achievements: [
        "GAOTek: 3-month internship with promotion to Assistant Squad Leader",
        "freeCodeCamp: Responsive Web Design Certification",
        "Great Learning: JavaScript and Graphic Design with Photoshop Certifications"
      ],
      skills: ["Leadership", "Web Design", "JavaScript", "Graphic Design"],
      type: "foundation"
    },
    {
      date: "2022",
      title: "Secondary School Certificate",
      description: "Completed SSC with Higher A Grade in Bio Science | Accelerated education - completed at age 13",
      achievements: [
        "Completed SSC with Higher A Grade",
        "Specialized in Bio Science",
        "Accelerated education - completed at age 13"
      ],
      skills: ["Biology", "Chemistry", "Academic Excellence", "Time Management"],
      type: "achievement"
    },
    {
      date: "2022-2023",
      title: "Additional Achievements",
      description: "Recognition for academic and extracurricular excellence",
      achievements: [
        "School's primary speaker for events and ceremonies",
        "Multiple academic competition participations",
        "Perfect attendance record with consistent academic excellence"
      ],
      skills: ["Public Speaking", "Leadership", "Academic Excellence"],
      type: "achievement"
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery, display, routes, journey, certifications };
