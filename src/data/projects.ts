export const projects = [
  {
    id: 'credresolve',
    title: 'CredResolve',
    problem: 'In group expenses (trips, friends), settling money is messy. Usually, people do multiple unnecessary transactions, which is inefficient and confusing.',
    design: 'I designed a full-stack system where:\n• Users can create groups and add expenses\n• Backend maintains balances and transactions\n• Designed relational schema using PostgreSQL + Prisma\n• Implemented JWT authentication and role-based permissions\n\nKey focus: Optimize how debts are settled',
    solution: 'Instead of settling each expense individually:\n• I calculate net balance for each user\n• Then apply a greedy algorithm (creditor ↔ debtor matching)\n• This reduces number of transactions significantly\n\nExample: Instead of 5–6 transactions → reduced to 2–3\n\nAlso:\n• Added secure APIs\n• Dockerized app and deployed on AWS EC2 with CI/CD',
    tech: ['React.js', 'Node.js', 'Prisma', 'PostgreSQL', 'AWS EC2', 'Docker', 'CI/CD', 'GitHub Actions'],
    github: 'https://github.com/vivekpal2001/credResolve',
    live: 'https://credresolve.vercel.app',
    accent: 'text-purple-400',
    bgAccent: 'from-purple-500/10 to-transparent'
  },
  {
    id: 'golfcharity',
    title: 'GolfCharity',
    problem: 'Managing charity golf tournaments and fundraising is traditionally a manual process. Organizers struggle with complex subscription tracking, validating score entries, and conducting fair, transparent monthly prize draws while ensuring charities get their split.',
    design: 'I designed a streamlined platform to automate the entire lifecycle of a charity golf tournament.\n\n• Integrated Stripe for seamless recurring subscriptions\n• Built a FIFO (First-In-First-Out) score entry system for fair tracking\n• Designed an automated monthly draw engine to randomly select winners\n• Implemented a transparent revenue split logic (Charity vs. Prize Pool)',
    solution: 'The final product is a full-stack Next.js application:\n• Uses Supabase for real-time database sync and secure authentication\n• Stripe webhooks automatically handle subscription states and payment failures\n• The monthly draw engine runs autonomously, ensuring fairness and transparency\n\nThis system eliminated manual tracking, increased trust among participants, and guaranteed that charitable contributions were handled accurately.',
    tech: ['React.js', 'Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/vivekpal2001/golf-charity',
    live: 'https://golf-charity.vercel.app',
    accent: 'text-orange-400',
    bgAccent: 'from-orange-500/10 to-transparent'
  },
  {
    id: 'mentorspeak',
    title: 'MentorSpeak.ai',
    problem: 'During placements, I noticed that many students, including myself, had good technical knowledge but struggled with confidence in interviews, especially in speaking and real-time interaction. There wasn’t a good platform to simulate a real interview environment with feedback.',
    design: 'I designed a system where users can have AI-based mock interviews through video calls.\n\n• Used Stream.io for handling video calls, recordings, and transcripts\n• Designed backend to be event-driven using webhooks\n• Instead of storing heavy media files, I decided to store only URLs of recordings and transcripts\n• Used background jobs (Inngest) to process transcripts asynchronously',
    solution: 'When a call ends:\n1. Stream.io sends a webhook with transcript/recording URL\n2. My backend stores only the URL in PostgreSQL\n3. Then background jobs fetch the transcript and generate AI-based summaries\n\nThis made the system:\n• Scalable (no heavy file storage)\n• Efficient (async processing)\n• Real-world ready (event-driven architecture)',
    tech: ['Next.js', 'Stream.io', 'Inngest', 'PostgreSQL', 'OpenAI'],
    github: 'https://github.com/vivekpal2001',
    live: 'https://mentorspeak.ai',
    accent: 'text-cyan-400',
    bgAccent: 'from-cyan-500/10 to-transparent'
  },
  {
    id: 'sqleditor',
    title: 'AI SQL Editor',
    problem: 'While practicing SQL, I faced a common issue — a lot of time is wasted in manually creating tables and inserting dummy data just to test queries.',
    design: 'I designed a developer tool where users can:\n• Generate tables and data using natural language\n• Run queries on PostgreSQL/MySQL\n\nBackend design included:\n• Next.js API routes for handling requests\n• Integration with Ollama (local AI) for schema + data generation\n• Added validation layer to ensure correct SQL generation\n• Used transactions for safe table creation and insertion',
    solution: 'User gives a prompt like: "Create users table with name, email..."\n\nSystem:\n• AI generates schema + data\n• Backend validates and fixes types (like phone as VARCHAR)\n• Executes queries in a transaction-safe manner\n• Displays results in UI\n\nThis improved:\n• Developer productivity\n• Reduced manual effort\n• Added safety with query limits and validation',
    tech: ['Next.js', 'PostgreSQL', 'MySQL', 'Ollama AI', 'Docker', 'AWS'],
    github: 'https://github.com/vivekpal2001',
    live: 'https://ai-sql-editor.vercel.app',
    accent: 'text-pink-400',
    bgAccent: 'from-pink-500/10 to-transparent'
  },
  {
    id: 'sporttrack',
    title: 'SportTrack AI',
    problem: 'Athletes and fitness enthusiasts often struggle to track their workouts, analyze performance trends, and stay motivated without expensive personal trainers or multiple fragmented apps.',
    design: 'I designed a comprehensive MERN stack application with AI integration.\n\n• Built a social feed for community engagement and motivation\n• Implemented data visualization for tracking workout analytics\n• Integrated AI APIs to generate personalized training plans and insights\n• Designed a gamified achievement system with badges and leaderboards',
    solution: 'Developed a full-stack platform featuring:\n• Real-time workout tracking and performance analytics\n• AI-powered personalized goals and training recommendations\n• Social networking capabilities to connect with other athletes\n• PDF export functionality for detailed performance reports\n\nThis created a centralized, intelligent hub for fitness tracking and community engagement.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AI APIs', 'Tailwind CSS'],
    github: 'https://github.com/vivekpal2001/sports-tracker',
    live: 'https://sporttrack-ai.vercel.app',
    accent: 'text-green-400',
    bgAccent: 'from-green-500/10 to-transparent'
  }
];
