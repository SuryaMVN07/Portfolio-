import { Layers, Activity, Cpu, LineChart, Sparkles, Terminal, Search, Car, UserCheck, Database } from 'lucide-react';

export const PROJECTS = [
  { title: "Fiesto - Delivery", description: `
    o Developed a full-stack food delivery platform enabling users to browse restaurants, place orders,and manage carts and checkouts.\n
    o Implemented responsive UI and backend logic to simulate real-world food ordering and delivery workflows.\n
    o Focused on user convenience and efficient restaurant management through structured data.
handling. `, tags: ["React", "Node", "Mongo"], color: "from-orange-500 to-red-500", icon: Layers },
  { title: "Alumni Engine", description: "Secure networking portal for CR RAO AIMSCS with JWT auth and admin panels.", tags: ["Express", "JWT", "DB"], color: "from-blue-500 to-cyan-500", icon: Activity },
  { title: "Phishing Detection", description: "High-accuracy ML classifier for URL safety auditing using Random Forest/XGBoost.", tags: ["Python", "ML", "SciKit"], color: "from-purple-500 to-pink-500", icon: Cpu },
  { title: "Stock Analysis", description: "R-based NASDAQ trend visualizer using candlestick charts and volatility metrics.", tags: ["R", "Statistics", "Plotly"], color: "from-yellow-500 to-orange-500", icon: LineChart },
  { title: "Stellama AI", description: "Intelligent chatbot with speech synthesis supporting both local and cloud inference.", tags: ["AI", "TTS", "APIs"], color: "from-indigo-500 to-purple-500", icon: Sparkles },
  { title: "CI/CD Pipeline", description: "DevOps automation using Docker, Jenkins, and GitHub Actions.", tags: ["DevOps", "Docker", "Git"], color: "from-green-500 to-emerald-500", icon: Terminal },
  { title: "Job Recommendation", description: "NLP engine using TF-IDF matching for automated resume-to-job pairing.", tags: ["NLP", "Python", "ML"], color: "from-cyan-500 to-blue-500", icon: Search },
  { title: "Car Selling Hub", description: "Modern responsive marketplace with advanced filtering.", tags: ["JS", "UX", "Responsive"], color: "from-slate-500 to-slate-800", icon: Car },
  { title: "Student Matrix", description: "Java Swing management suite integrated with SQLite.", tags: ["Java", "SQL", "GUI"], color: "from-blue-600 to-indigo-700", icon: UserCheck },
  { title: "Library DSA", description: "Trie-based search optimization for high-speed book retrieval.", tags: ["Java", "DSA", "Trie"], color: "from-red-500 to-pink-500", icon: Database }
];
