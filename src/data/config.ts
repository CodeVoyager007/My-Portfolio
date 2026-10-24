export const config = {
  developer: {
    name: "Ayesha Mughal",
    fullName: "Ayesha Mughal",
    title: "AI Agent Builder & Full-Stack Developer in Karachi",
    tagline: "Someone has to test the AI hype before your codebase does.",
    location: "Karachi, Pakistan",
    email: "ayeshamughal2162@gmail.com",
    description:
      "Ayesha Mughal is an AI agent builder, full-stack developer, and technical writer based in Karachi, Pakistan. Explore her AI projects, software engineering work, technical articles, and career journey.",
  },
  social: {
    github: "https://github.com/CodeVoyager007",
    linkedin: "https://www.linkedin.com/in/ayeshaintech/",
    twitter: "https://x.com/Ayesha_Mughal21",
    medium: "https://medium.com/@ayeshamughal21",
    email: "ayeshamughal2162@gmail.com",
    location: "Karachi, Pakistan",
  },
  contact: {
    resume: "/ayesha-mughal-resume.pdf",
    email: "ayeshamughal2162@gmail.com",
    location: "Karachi, Pakistan",
    github: "https://github.com/CodeVoyager007",
    linkedin: "https://www.linkedin.com/in/ayeshaintech/",
    twitter: "https://x.com/Ayesha_Mughal21",
    medium: "https://medium.com/@ayeshamughal21",
  },
  about: {
    title: "About Me",
    description:
      "I am an AI Agent Builder and Full-Stack Engineer based in Karachi, Pakistan. My philosophy is simple: code is proof. While the internet is flooded with AI hype and superficial demos, I focus on stress-testing LLMs, building autonomous agent tool loops, and crafting resilient full-stack systems. From winning Top 5 in international prompting challenges to completing Stanford CS106A Code in Place and authoring technical guides with 1.4M+ cumulative views on Medium, I approach every project with brutalist engineering standards and clear documentation.",
  },
  whatIDo: [
    {
      title: "AI AGENTS & AUTOMATION",
      description: "Agents that do real work, not demos",
      details:
        "I build AI tools that run on their own: an AI employee that handles scheduling and CRM tasks, a Shariah-compliant stock screener that runs on a schedule, and an interview coach that gives feedback in Urdu.",
      work: ["Personal AI Employee", "PSX Halal Tracker", "SpeakUp Coach"],
    },
    {
      title: "TECHNICAL CONTENT WRITER",
      description: "Deep-dives with 1.4M+ cumulative views",
      details:
        "I write for In Plain English on Medium, breaking down Python, FastAPI, Next.js and AI agents, and stress-testing LLMs before readers rely on them. Top reads include 'Vibe Coding Is Dead' (1.9K claps).",
      work: ["In Plain English", "Vibe Coding Is Dead", "Python & AI tutorials"],
    },
    {
      title: "FULL-STACK DEV",
      description: "Web apps built end to end",
      details:
        "I build full-stack apps with Next.js, TypeScript and Supabase, from a contactless QR ordering system with a live kitchen display to AI-powered study and learning platforms.",
      work: ["ServeEase KDS", "StudyForge AI", "Physical AI Course"],
    },
  ],
  featuredProjects: [
    {
      id: 1,
      title: "SpeakUp Coach",
      category: "AI Interview Coaching Platform",
      technologies: "Next.js, Express, Supabase, Gemini, Claude, Alibaba Bailian",
      image: "/images/speakup-coach.webp",
      description:
        "A free oral interview practice studio built for candidates who lack access to private coaching. It tailors questions to a job description, evaluates answers against STAR, measures delivery signals such as pace and pauses, then gives actionable Urdu or Roman Urdu coaching. Guest practice is available without an account.",
      link: "https://github.com/CodeVoyager007/Speakup-Coach",
      demoLink: "https://speakup-coach.vercel.app/",
      demoLabel: "LIVE APP",
      featured: true,
    },
    {
      id: 2,
      title: "Tareekh-ky-Jhonky",
      category: "Culture & AI Heritage Guide",
      technologies: "TypeScript, Next.js, AI History Guide, Tailwind CSS",
      image: "/images/tareekh-jhonky.webp",
      description:
        "AI Seekho 2026 Hackathon Phase 2 Finalist (PKR 2.5M prize pool). An interactive AI guide for Pakistan's historic shrines, mosques, and ancient heritage landmarks, revealing hidden historical stories and folklore for domestic and international visitors.",
      link: "https://github.com/CodeVoyager007/Tareekh-ky-jhonky",
      featured: true,
    },
    {
      id: 3,
      title: "PSX Halal Tracker",
      category: "Fintech & Automated Analytics",
      technologies: "Python, Gemini API, Supabase, GitHub Actions, Pandas",
      image: "/images/psx-halal.webp",
      description:
        "A personal watchlist and email briefing service for companies in the PSX KMI All-Share index. Its scheduled pipeline imports market data, computes indicators, and sends daily or weekly digests with closing prices, movers, unusual volume, and RSI extremes; the live dashboard uses passwordless email sign-in.",
      link: "https://github.com/CodeVoyager007/PSX-Halal-Tracker",
      demoLink: "https://psx-halal-tracker.vercel.app/dashboard",
      demoLabel: "LIVE APP",
      featured: true,
    },
    {
      id: 4,
      title: "ServeEase KDS",
      category: "Hospitality Tech & KDS",
      technologies: "Next.js, React, Tailwind CSS, SaaS, Supabase",
      image: "/images/serveease.webp",
      description:
        "A contactless QR-based restaurant ordering system built with real-time Kitchen Display System (KDS) feeds, predictive order routing, and AI dish recommendation engines.",
      link: "https://serveease-next.vercel.app/",
      featured: true,
    },
    {
      id: 5,
      title: "Personal AI Employee (FTE)",
      category: "Agentic AI & Automation",
      technologies: "Python, AI Agents, LangChain, LiteLLM, FastAPI",
      image: "/images/momentum-ai.webp",
      description:
        "Autonomous AI Employee & Full-Time Equivalent (FTE) agent built for GIAIC hackathon, executing autonomous scheduling, CRM automation, and tool execution loops.",
      link: "https://github.com/CodeVoyager007/Personal-AI-Employee-Hackathon-0",
      featured: true,
    },
    {
      id: 6,
      title: "Physical AI & Robotics Course",
      category: "EdTech & Physical AI",
      technologies: "Next.js, React, Tailwind CSS, TypeScript",
      image: "/images/robotics-course.webp",
      description:
        "A comprehensive educational platform for learning Physical AI and Humanoid Robotics, featuring structured learning modules, interactive resources, and real-time curriculum tracking.",
      link: "https://github.com/CodeVoyager007/Physical-AI-Humanoid-Robotics-Course",
      featured: true,
    },
    {
      id: 7,
      title: "StudyForge AI",
      category: "EdTech AI Platform",
      technologies: "React, TypeScript, Supabase, AI Study Tools",
      image: "/images/studyforge-ai.webp",
      description:
        "An AI-powered study platform that transforms topics into personalized study materials including MCQs, flashcards, and summaries using advanced AI.",
      link: "https://github.com/CodeVoyager007/study-forge-ai",
      featured: true,
    },
    {
      id: 8,
      title: "Audionic Soundscape Shop",
      category: "E-Commerce Storefront",
      technologies: "React, TypeScript, Vite, Tailwind CSS",
      image: "/images/audionic-shop.webp",
      description:
        "An e-commerce storefront for audio equipment with high-performance interactions and end-to-end type-safety across the stack.",
      link: "https://github.com/CodeVoyager007/audionic-soundscape-shop",
      featured: true,
    },
  ],
  secondaryProjects: [
    {
      id: 9,
      title: "PromptVault",
      category: "AI Prompt Marketplace",
      technologies: "Next.js, Supabase, Prompt Engineering",
      image: "/images/prompt-vault.webp",
      description:
        "A marketplace for high-quality AI prompts focused on coding and business automation, curated for engineers.",
      link: "https://github.com/CodeVoyager007/Prompt-Vaulet",
      featured: false,
    },
    {
      id: 10,
      title: "Yaadon ki Baithak",
      category: "AI, Voice & Family Heritage",
      technologies: "Next.js 16, FastAPI, Gemini, Cloudflare AI, Supabase",
      image: "/images/yaadon-ki-baithak.svg",
      description:
        "A voice-first way to preserve elders’ stories in Urdu and English. I built the story-centered interface and AI agent pipeline around Hudhud, a hoopoe from Urdu folk tales: it listens first, asks at most three gentle clarifying questions, then helps turn the recording into an illustrated, page-turning book with the elder’s real voice. Quote checks and links back to recordings help keep the story grounded in what was actually said.",
      link: "https://github.com/CodeVoyager007/Yaadon-Ki-Baithak",
      demoLink: "https://yaadon-ki-baithak.vercel.app/",
      demoLabel: "LIVE APP",
      featured: false,
    },
    {
      id: 11,
      title: "Bill Decoder",
      category: "Women Tech Quest · AI Prototype",
      technologies: "Next.js 16, FastAPI, Gemini, Pandas, scikit-learn",
      image: "/images/bill-decoder.svg",
      description:
        "A Women Tech Quest Build with AI prototype built around a modular analysis workspace: upload a dataset or documents, ask questions, extract or classify text, or try a baseline prediction, with results shown alongside charts, tables, or sources. The public repo still contains challenge-day placeholders and a generic custom-mode prompt, so the bill-specific use case and completed event outcome need confirmation before making stronger claims.",
      link: "https://github.com/CodeVoyager007/Bill-Decoder",
      featured: false,
    },
  ],
  experiences: [
    {
      position: "Freelance AI Developer & Technical Writer",
      company: "Self-Employed · International Clients",
      period: "Jan 2025 - Present",
      location: "Remote",
      description:
        "$1.2K+ in client revenue across software and writing. Building AI agent and automation projects for 4+ international clients, including a 12-day AI-powered resume platform and an n8n + Claude API email automation system, plus paid technical writing for fintech and design-industry clients. 100% on-time delivery.",
      responsibilities: [
        "Built a 12-day AI-powered resume platform for a client",
        "Built an n8n + Claude API email automation system",
        "Wrote a 4-part DeFi/crypto regulation series and two commissioned 2,000+ word articles",
      ],
      technologies: ["Claude API", "n8n", "AI Agents", "Automation", "Technical Writing"],
    },
    {
      position: "Technical Writer & AI Educator",
      company: "In Plain English (Medium Publication)",
      period: "Apr 2025 - Present",
      location: "Remote",
      description:
        "Publishing technical deep-dives on Python, JavaScript, and AI agent implementations reaching 1.4M+ cumulative views by April 2026. Top articles include 'Vibe Coding Is Dead' (1.9K claps) and 'I Didn't Pay a Single Dollar to Use Claude Code' (1.6K claps).",
      responsibilities: [
        "Authoring technical guides with 1.4M+ cumulative views on Medium",
        "Stress-testing LLMs, AI agents, and security watermarks",
        "Writing tutorials on Python, FastAPI, and Next.js",
      ],
      technologies: ["Python", "Technical Writing", "AI Agents", "LLM Evaluation", "Medium"],
    },
    {
      position: "Stanford Code in Place Graduate",
      company: "Stanford University",
      period: "2026",
      location: "Online",
      description:
        "Completed Stanford's CS106A curriculum in the Experienced Student Track. Certificate of completion signed by Professor Christopher Piech.",
      responsibilities: [
        "Completed advanced Python software engineering modules",
        "Built interactive graphic and algorithmic applications",
        "Mastered problem-solving patterns in Python",
      ],
      technologies: ["Python", "Algorithms", "Software Engineering", "Stanford CS106A"],
    },
    {
      position: "Google Cloud Silver League Contender",
      company: "Google Cloud Skills Boost",
      period: "2026",
      location: "Online",
      description:
        "Earned 1,060+ points and 5+ verified badges across AI Agents, Google ADK, Cloud Run, LLMs, and Generative AI.",
      responsibilities: [
        "Engineering AI Agents with Google ADK",
        "Building web applications on Google Cloud Run",
        "Prompt engineering & LLM deployment",
      ],
      technologies: ["Google Cloud", "AI Agents", "Google ADK", "Cloud Run", "Generative AI"],
    },
    {
      position: "Ramadan Prompting Nights: Top 5 of 317",
      company: "International AI Prompting Competition",
      period: "2026",
      location: "Global",
      description:
        "Placed Top 5 out of 317 international AI prompt engineering contenders for advanced problem-solving and agent prompt construction.",
      responsibilities: [
        "Crafting multi-step agentic prompts",
        "Optimizing LLM reasoning and output accuracy",
        "Competing against 300+ global prompt engineers",
      ],
      technologies: ["Prompt Engineering", "LLMs", "Agentic Workflows"],
    },
    {
      position: "Assistant Squad Leader & Web Developer",
      company: "GAO Tech",
      period: "Sep 2024 - Dec 2024",
      location: "Internship",
      description:
        "Promoted to Assistant Squad Leader within 21 days for exceptional team coordination during a 3-month engineering internship.",
      responsibilities: [
        "Leading developer squad sprint tasks and code reviews",
        "Building responsive web applications",
        "Digital marketing and strategy integration",
      ],
      technologies: ["Web Development", "Team Leadership", "Digital Strategy", "JavaScript"],
    },
  ],
  certifications: [
    { title: "Women Tech Quest 2026: Build with AI (Certificate of Participation)", icon: "WTQ", issuer: "10Pearls - Women Tech Quest", link: "/certificates/wtq-2026-certificate-ayesha-mughal.pdf", image: "/certificates/wtq-2026-certificate-preview.webp" },
    { title: "Alibaba Cloud AI Hackathon Pakistan 2026: SpeakUp Coach (Certificate of Participation)", icon: "AI HACKATHON", issuer: "Alibaba Cloud AI Hackathon Pakistan", link: "https://aihackathon.cognix-pk.com/certificate/Z553-NWSD-ZTMN", image: "/certificates/ai-hackathon-karachi-2026-speakup-coach.webp" },
    { title: "Ramadan Prompting Nights Challenge 2026 (Top 5 / 317)", icon: "TOP 5", issuer: "International AI Challenge", link: "/certificates/ramadan_prompting_nights_challenge_completion_certificate.pdf", image: "" },
    { title: "Stanford Code in Place 2026 Graduation (Experienced Track)", icon: "STANFORD", issuer: "Stanford University", link: "/certificates/stanford_code_in_place_2026_completion.pdf", image: "" },
    { title: "Harvard CS50 Introduction to AI with Python", icon: "HARVARD", issuer: "Harvard University", link: "/certificates/cs50_introduction_to_ai_with_python.pdf", image: "/certificates/cs50_introduction_to_ai_with_python.webp" },
    { title: "Google Cloud: Introduction to AI Agents", icon: "GOOGLE", issuer: "Google Cloud", link: "/certificates/introduction_to_ai_agents.webp", image: "/certificates/introduction_to_ai_agents.webp" },
    { title: "Google Cloud: Engineer AI Agents with ADK", icon: "GOOGLE", issuer: "Google Cloud", link: "/certificates/engineer_ai_agents_with_adk.webp", image: "/certificates/engineer_ai_agents_with_adk.webp" },
    { title: "Google Cloud: Intro to Large Language Models", icon: "GOOGLE", issuer: "Google Cloud", link: "/certificates/introduction_to_large_language_models.webp", image: "/certificates/introduction_to_large_language_models.webp" },
    { title: "Google Cloud: Intro to Generative AI", icon: "GOOGLE", issuer: "Google Cloud", link: "/certificates/introduction_to_generative_ai.webp", image: "/certificates/introduction_to_generative_ai.webp" },
    { title: "Google Cloud: Build a Website on Google Cloud", icon: "GOOGLE", issuer: "Google Cloud", link: "/certificates/build_a_website_on_google_cloud.webp", image: "/certificates/build_a_website_on_google_cloud.webp" },
    { title: "Harvard CS50x Puzzle Day 2026 (Perfect 9/9 Score)", icon: "HARVARD", issuer: "Harvard University", link: "/certificates/cs50x_puzzle_day_2026.pdf", image: "" },
    { title: "Harvard CS50x Puzzle Day 2024", icon: "HARVARD", issuer: "Harvard University", link: "/certificates/cs50x_puzzle_day_2024.pdf", image: "/certificates/cs50x_puzzle_day_2024.webp" },
    { title: "freeCodeCamp Responsive Web Design Developer Certification", icon: "FCC", issuer: "freeCodeCamp", link: "/certificates/freecodecamp_responsive_web_design_developer_certification.webp", image: "/certificates/freecodecamp_responsive_web_design_developer_certification.webp" },
    { title: "GAO Tek: Web Development Engineering Internship", icon: "GAO TEK", issuer: "GAO Tek Inc.", link: "/certificates/gao_tek_web_development_internship_certificate.pdf", image: "/certificates/gao_tek_web_development_internship_certificate.webp" },
    { title: "GAO Tek: Assistant Squad Leader Completion Certificate", icon: "GAO TEK", issuer: "GAO Tek Inc.", link: "/certificates/gao_tek_internship_completion_certificate.pdf", image: "/certificates/gao_tek_internship_completion_certificate.webp" },
    { title: "GAO Tek: Digital Marketing & Strategy Internship", icon: "GAO TEK", issuer: "GAO Tek Inc.", link: "/certificates/gao_tek_digital_marketing_internship_certificate.pdf", image: "/certificates/gao_tek_digital_marketing_internship_certificate.webp" },
  ],
  // Medium stats shown on the blog. Update these by hand from your Medium dashboard.
  writingStats: {
    totalViews: "1.4M+",
    totalViewsLabel: "CUMULATIVE VIEWS · APRIL 2026",
    topClaps: "1.9K+",
    topClapsLabel: "TOP ARTICLE CLAPS",
    primaryPub: "IN PLAIN ENGLISH",
  },
  // Most-read articles. Always shown on the blog, even when the live Medium feed is unavailable.
  articles: [
    {
      title: "Vibe Coding Is Dead. Here's What Replaced It.",
      pub: "Artificial Intelligence in Plain English",
      claps: "1.9K",
      link: "https://ai.plainenglish.io/vibe-coding-is-dead-heres-what-replaced-it-aa7d2889b05a",
      highlight: "Most Read",
      date: "Mar 16, 2026",
      contentSnippet: "Why intuition-based prompt hacking is failing production systems and how evaluator-optimizer agent loops are replacing it.",
    },
    {
      title: "I Didn't Pay a Single Dollar to Use Claude Code. Here's Exactly How.",
      pub: "Artificial Intelligence in Plain English",
      claps: "1.6K",
      link: "https://ai.plainenglish.io/i-didnt-pay-a-single-dollar-to-use-claude-code-here-s-exactly-how-979b40132b02",
      highlight: "Most Read",
      contentSnippet: "Claude Code talks to whatever API URL you point it at, so you can run it on free models through OpenRouter. A step-by-step setup guide.",
    },
    {
      title: "Everyone's Freaking Out About Claude's \"Undetectable\" Watermark. Here's What It Actually Does.",
      pub: "Artificial Intelligence in Plain English",
      claps: "1.2K",
      link: "https://ai.plainenglish.io/everyones-freaking-out-about-claude-s-undetectable-watermark-here-s-what-it-actually-does-22ea721e1a63",
      highlight: "AI Security Breakdown",
      date: "Aug 13, 2026",
      contentSnippet: "Deconstructing logit bias alterations, steganographic token distribution, and empirical verification methods.",
    },
  ],
};
