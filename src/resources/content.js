const person = {
  firstName: "Ayesha",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Developer & Full-Stack Engineer",
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
      I share practical insights on AI development, modern web engineering, and my ongoing projects in tech.
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
    link: "https://www.linkedin.com/in/ayeshaintech/",
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
  title: "Ayesha Mughal — AI Developer & Technical Writer from Karachi, Pakistan",
  description: "Ayesha Mughal is a 16-year-old AI developer and technical writer from Karachi, Pakistan. Building agentic AI systems, full-stack apps, and writing in public. 27+ certifications, 225K+ Medium views.",
  headline: <>Developing functional, AI-driven web applications</>,
  featured: {
    display: true,
    title: <>Current Focus: <strong className="ml-4">Agentic AI</strong></>,
  },
  subline: (
    <>
      I&apos;m Ayesha, a developer specializing in AI and modern web technologies. 
      With 27+ certifications and hands-on project experience, I focus on building efficient, scalable digital solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Background and experience of ${person.name}, AI Developer based in ${person.location}`,
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
    title: "About Me",
    description: (
      <>
        I am a developer focused on building practical AI systems and modern web applications. 
        Currently, I am specializing in Agentic AI and tool-use orchestration, while maintaining 
        a strong foundation in full-stack development. I prioritize clean design, performance, 
        and user-centered interfaces in everything I build.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "GAO Tech",
        timeframe: "2023",
        role: "Assistant Squad Leader",
        achievements: [
          <>
            Promoted to Assistant Squad Leader within 21 days for demonstrating strong technical and leadership skills.
          </>,
          <>
            Collaborated on multiple development projects during a 3-month internship, gaining practical experience in team-based software delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "In Plain English",
        timeframe: "July 2025 - Present",
        role: "Technical Writer",
        achievements: [
          <>Publishing technical guides and articles for a global developer community.</>,
          <>Covering topics across Python, JavaScript, and AI implementation.</>,
          <>Regularly contributing to one of the largest tech publications on Medium.</>,
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
        name: "Higher Secondary Education",
        description: <>Completed HSC Part II (Pre-Engineering) in 2025 with strong academic standing.</>,
      },
      { 
        name: "Secondary School Certificate",
        description: <>Completed SSC with a Higher A Grade, graduating ahead of schedule at age 13.</>,
      },
      {
        name: "GIAIC",
        description: <>Specializing in AI, Web3, and Metaverse Development. Currently in Quarter 4 (Since Feb 2024).</>,
      },
      {
        name: "Harvard CS50",
        description: <>
          - CS50&apos;s Introduction to AI with Python Certification<br/>
          - CS50x Puzzle Day: Achieved a perfect 9/9 score<br/>
          - Focused on advanced problem-solving and algorithmic thinking
        </>,
      },
      {
        name: "Professional Development",
        description: <>
          - freeCodeCamp: Responsive Web Design Certification<br/>
          - Great Learning: JavaScript and Graphic Design Certifications
        </>,
      },
      {
        name: "Academic Achievements",
        description: <>
          - Selected as the primary speaker for various school events and ceremonies.<br/>
          - Consistent record of high academic performance and competition participation.
        </>,
      }
    ],
  },
  highlights: {
    display: true,
    title: "Focus Areas",
    sections: [
      {
        title: "Current Focus",
        description: <>
          Implementing Agentic AI patterns, tool-use orchestration, and LLM evaluation frameworks. Working with OpenRouter, LiteLLM, and real-time streaming interfaces.
        </>
      },
      {
        title: "Development Philosophy",
        description: <>
          I value simple interfaces, fast feedback loops, and clear documentation. My preferred tech stack includes Next.js, TypeScript, and Framer Motion.
        </>
      },
      {
        title: "Tech Stack",
        description: <>
          Proficient with VS Code, GitHub, Postman, and Vercel. Experienced in agile development and iterative shipping cycles.
        </>
      },
      {
        title: "Interests",
        description: <>
          Beyond coding, I enjoy public speaking, complex puzzle challenges, and designing minimal, dark-themed user interfaces.
        </>
      }
    ]
  },
  technical: {
    display: true,
    title: "Tech Stack",
    skills: [
      {
        title: "Languages",
        description: <>Proficient in JavaScript, TypeScript, Python, C/C++, HTML5, and CSS3.</>,
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: <>Next.js, Node.js, Tailwind CSS, Framer Motion, Streamlit, and Git.</>,
        images: [],
      },
      {
        title: "AI & Future Tech",
        description: <>Specializing in Agentic AI, LLM Orchestration, and Evaluator-Optimizer patterns.</>,
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
  description: "A record of my professional certifications and technical achievements.",
  images: [
    {
      src: "/certificates/RPN-Certificate.pdf",
      alt: "5th Place - Ramadan Prompting Nights",
      width: 200,
      height: 140,
    },
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
      src: "/certificates/CS50x Puzzle Day 2024 (1).pdf",
      alt: "CS50x Puzzle Day 2024 Official Certificate",
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
  description: "Writing about AI development and modern engineering.",
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
    description: "Selection of my recent projects",
    projects: [
      {
        slug: "serveease-next",
        title: "ServeEase",
        summary: "A hospitality management platform for fine dining, featuring real-time KDS and predictive analytics.",
        tech: ["Next.js", "React", "Tailwind CSS", "SaaS"],
        link: "https://serveease-next.vercel.app/",
        repo: "https://github.com/CodeVoyager007/serveease-next",
        publishedAt: "2024-06-15",
      },
      {
        slug: "audionic-soundscape-shop",
        title: "Audionic Shop",
        summary: "An e-commerce storefront for audio equipment with high-performance interactions and type-safety.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui"],
        link: "https://audionic-soundscape-shop.vercel.app/",
        repo: "https://github.com/CodeVoyager007/audionic-soundscape-shop",
        publishedAt: "2024-06-10",
      },
      {
        slug: "momentum-ai-todo-app",
        title: "Momentum AI",
        summary: "A task management application utilizing AI agents for automated task organization.",
        tech: ["Next.js", "AI Agents", "LangChain", "Tailwind CSS"],
        link: "https://momentum-ai-todo-app.vercel.app/",
        repo: "https://github.com/CodeVoyager007/hackathon-2/tree/main/phase-3",
        publishedAt: "2024-05-01",
      },
      {
        slug: "humanoid-robotics-course",
        title: "Humanoid Robotics",
        summary: "An educational platform focused on physical AI and humanoid robotics learning materials.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        link: "https://physical-ai-humanoid-robotics-cours-six.vercel.app/",
        repo: "https://github.com/CodeVoyager007/Physical-AI-Humanoid-Robotics-Course",
        publishedAt: "2024-04-28",
      },
      {
        slug: "sm-marketing-real-estate",
        title: "SM Marketing",
        summary: "A modern real estate platform with property listings and interactive lead management.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        link: "https://sm-markeing-real-estate.vercel.app/",
        repo: "https://github.com/CodeVoyager007/SM-Markeing-real-estate",
        publishedAt: "2024-04-25",
      },
      {
        slug: "study-forge-ai",
        title: "StudyForge AI",
        summary: "An AI-powered study tool that generates personalized flashcards and summaries from raw topics.",
        tech: ["React", "TypeScript", "Supabase", "AI Study Tools"],
        link: "https://study-forge-ai.vercel.app/",
        repo: "https://github.com/CodeVoyager007/study-forge-ai",
        publishedAt: "2024-04-15",
      },
      {
        slug: "prompt-vault",
        title: "PromptVault",
        summary: "A marketplace for high-quality AI prompts focused on coding and business automation.",
        tech: ["Next.js", "Supabase", "Prompt Engineering", "Framer Motion"],
        link: "https://prompt-vaulet-get-200-plus-prompts.vercel.app/",
        repo: "https://github.com/CodeVoyager007/prompt-vault",
        publishedAt: "2024-04-10",
      },
      {
        slug: "luxe-interiors",
        title: "Luxe Interiors",
        summary: "A premium interior design portfolio featuring smooth transitions and curated living spaces.",
        tech: ["React", "Framer Motion", "Styled Components", "Vite"],
        link: "https://interior-design-website-indol-ten.vercel.app/",
        repo: "https://github.com/CodeVoyager007/interior-design-website",
        publishedAt: "2024-04-05",
      },
      {
        slug: "sugar-bliss-bakery",
        title: "Sugar Bliss",
        summary: "An e-commerce frontend for a bakery featuring product galleries and order forms.",
        tech: ["React", "Tailwind CSS", "Vercel"],
        link: "https://bakery-website-by-ayesha-mughal.vercel.app/",
        repo: "https://github.com/CodeVoyager007/bakery-website",
        publishedAt: "2024-04-01",
      },
      {
        slug: "course-search-engine",
        title: "Course Finder",
        summary: "A search engine for programming courses with advanced filtering and metadata aggregation.",
        tech: ["Next.js", "API Integration", "Tailwind CSS"],
        link: "https://courses-search-engine-by-ayesha-mughal.vercel.app/",
        repo: "https://github.com/CodeVoyager007/courses-search-engine",
        publishedAt: "2024-03-10",
      },
      {
        slug: "github-profile-viewer",
        title: "Profile Viewer",
        summary: "A data visualization tool for analyzing GitHub profiles and repository activity.",
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
  title: `Gallery – ${person.name}`,
  description: `Photos and visual work by ${person.name}`,
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
  description: "Key milestones in my development career.",
  milestones: [
    {
      date: "May 2026",
      title: "Personal Brand Unification",
      description: "Audited and rebuilt my entire personal brand from scratch — unified across LinkedIn, Medium, GitHub, and portfolio under a single Cinematic Noir system. Rewrote LinkedIn headline, about section, and curated featured posts for maximum impact.",
      achievements: [
        "Defined Cinematic Noir as master brand system — True Black #000000, white/silver accents",
        "Redesigned LinkedIn banner, updated headline and about section",
        "Updated profile photo consistently across all platforms",
        "New tagline: \"I Engineer It. Then I Explain It.\"",
        "Portfolio, Medium, and LinkedIn now fully cohesive"
      ],
      skills: ["Personal Branding", "Content Strategy", "Design Systems", "LinkedIn Optimization"],
      type: "achievement"
    },
    {
      date: "April 2026",
      title: "AI Seekho National Hackathon",
      description: "Built and submitted Tareekh-ky-Jhonky (تاریخ کے جھونکے) — a Pakistani heritage AI scanner — for Google's national AI Seekho 2026 competition. Deployed a full production app in Phase 1, now heading into a physical hackathon with a PKR 2.5M prize pool.",
      achievements: [
        "Built heritage scanner app using Gemini 1.5 Pro, Google ADK, and RAG pipelines",
        "Features include Heritage Scanner, Passport Stamps, Site Guides, Audio Walks, and Inscription Translator",
        "Designed Santorini-inspired UI with Cinematic Noir undertones",
        "Successfully deployed on Google Cloud Run",
        "Phase 2: physical hackathon across Karachi, Lahore, and Islamabad"
      ],
      skills: ["Gemini API", "Google ADK", "RAG", "Google Cloud Run", "Next.js", "Agentic AI", "Hackathon"],
      type: "achievement"
    },
    {
      date: "April 2026",
      title: "Stanford Code in Place 2026",
      description: "Accepted into Stanford University's Code in Place 2026 — CS106A, the same introductory CS course Stanford undergraduates take, opened to the world for free. Placed into the Experienced Student track and completed all of Week 1 in a single session.",
      achievements: [
        "Accepted into Stanford Code in Place 2026 out of thousands of global applicants",
        "Placed into Experienced Student track — full course access and certificate",
        "Completed Week 1 entirely in one session",
        "Previously scored 9/9 on CS50X and completed CS50 AI with Python"
      ],
      skills: ["Python", "CS50", "Stanford", "Problem Solving", "Algorithms"],
      type: "learning"
    },
    {
      date: "April 2026",
      title: "Audience Milestone & Viral Growth",
      description: "Crossed 1,000 followers on Medium and hit 1.3 million views in just 21 days — driven entirely by organic writing on AI systems and agentic engineering. No ads, no viral hacks. Just consistent, technical storytelling.",
      achievements: [
        "Hit 1K followers milestone on Medium (April 21, 2026)",
        "1.3M views, 23K reads, 80K presentations in 21 days",
        "+202 followers and +146 subscribers in a single month",
        "Published across AI in Plain English with pieces on agentic systems and production AI",
        "Built and published a 7-slide LinkedIn carousel documenting the milestone"
      ],
      skills: ["Technical Writing", "Content Strategy", "Agentic AI", "Audience Growth", "Medium", "Build in Public"],
      type: "achievement"
    },
    {
      date: "March 2026",
      title: "Audience Growth & AI Recognition",
      description: "Significant expansion in technical reach and performance in AI competitions.",
      achievements: [
        "Reached 44k+ views on technical Medium articles.",
        "Won 5th place in the Ramadan Prompting Nights challenge.",
        "Completed hackathons on building autonomous AI employees and digital FTE factories."
      ],
      skills: ["Technical Writing", "Prompt Engineering", "Autonomous Agents"],
      type: "achievement"
    },
    {
      date: `January ${new Date().getFullYear()}`,
      title: "Full-Stack AI Evolution",
      description: "Developed an end-to-end task management ecosystem using AI agents and Kubernetes.",
      achievements: [
        "Built a multi-phase project from console apps to cloud-scale Kubernetes deployments.",
        "Integrated autonomous AI agents for full CRUD operations.",
        "Implemented containerization with Docker and orchestration with Kubernetes."
      ],
      skills: ["Next.js", "AI Agents", "Docker", "Kubernetes"],
      type: "achievement"
    },
    {
      date: "December 2025",
      title: "RAG & Spec-Driven Development",
      description: "Focused on building reliable AI systems using Retrieval-Augmented Generation.",
      achievements: [
        "Built a technical documentation platform using Docusaurus.",
        "Implemented a RAG chatbot for high-performance information retrieval.",
        "Applied spec-driven development to ensure predictable AI behavior."
      ],
      skills: ["Docusaurus", "RAG", "LLMs", "Development Standards"],
      type: "achievement"
    },
    {
      date: "2024",
      title: "Startup Challenge Winner",
      description: <>
        Won first place in the Startup Challenge at GIAIC for innovative problem-solving.
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7403769513621839872/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', marginLeft: '8px' }}>
          View Post
        </a>
      </>,
      achievements: [
        "Awarded first place for a technical startup concept.",
        "Presented innovative solutions to a panel of industry experts.",
        "Recognized for entrepreneurial potential in tech."
      ],
      skills: ["Product Strategy", "Pitching", "Problem Solving"],
      type: "achievement"
    },
    {
      date: "2024 - Present",
      title: "GIAIC Specialization",
      description: "Advanced study in AI, Web3, and Metaverse development.",
      achievements: [
        "Focusing on Prompt Engineering and LLM development.",
        "Building practical applications with Web3 and Blockchain technologies.",
        "Developing expertise in Agentic AI systems."
      ],
      skills: ["AI Development", "Web3", "Blockchain", "Prompt Engineering"],
      type: "learning"
    },
    {
      date: "2023 - 2025",
      title: "Academic Background",
      description: "Completed Higher Secondary Education with a focus on Computer Science.",
      achievements: [
        "Maintained high academic standing in the Computer Science track.",
        "Focused on foundational programming and mathematics.",
        "Graduated HSC Part II in 2025."
      ],
      skills: ["Computer Science", "Mathematics", "Programming Foundations"],
      type: "Finished"
    },
    {
      date: "July 2025 - Present",
      title: "Technical Writing",
      description: "Joined 'In Plain English' as a regular contributor on Python and AI topics.",
      achievements: [
        "Writing technical deep-dives for a global audience.",
        "Explaining complex AI and JavaScript concepts simply.",
        "Building a following through high-quality technical documentation."
      ],
      skills: ["Writing", "Communication", "Python", "JavaScript"],
      type: "work"
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery, display, routes, journey, certifications };
