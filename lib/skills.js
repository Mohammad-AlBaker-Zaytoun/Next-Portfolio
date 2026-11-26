// Skills with icons for the /resume page. The names live in skill-names.js.
import { skillNames } from "./skill-names";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaPhp,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiLinux,
  SiGit,
  SiWhatsapp,
  SiPowerbi,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";

const icons = {
  "HTML5": FaHtml5,
  "CSS3": FaCss3,
  "JavaScript": FaJs,
  "TypeScript": SiTypescript,
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js / Express": SiNodedotjs,
  "PHP": FaPhp,
  "Laravel": SiLaravel,
  "C#": TbBrandCSharp,
  "Java": FaJava,
  "Python": SiPython,
  "Flutter": SiFlutter,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "SQL Server": SiMicrosoftsqlserver,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "Docker": SiDocker,
  "Linux / Ubuntu": SiLinux,
  "Git": SiGit,
  "Networking": FaNetworkWired,
  "WhatsApp & Meta APIs": SiWhatsapp,
  "AI & Machine Learning": LuBrainCircuit,
  "Power BI": SiPowerbi,
};

export const skills = skillNames.map((name) => ({ name, Icon: icons[name] }));
