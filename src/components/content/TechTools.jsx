
import "./Techtools.css";
import { createElement } from "react";
import {
  FaCode,
  FaBrain,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaMousePointer,
  FaNodeJs,
  FaPlug,
  FaReact,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiAppsmith,
  SiFirebase,
  SiGooglemaps,
  SiGooglesheets,
  SiLeaflet,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const GROUPS = [
  {
    key: "frontend",
    name: "Frontend",
    note: "Core languages and styling for responsive interfaces.",
    tools: [
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: FaJs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    key: "frameworks",
    name: "Frameworks",
    note: "Libraries and frameworks for modern applications.",
    tools: [
      { name: "React", Icon: FaReact },
      { name: "React Native", Icon: FaMobileAlt },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: FaCode },
    ],
  },
  {
    key: "uiux",
    name: "UI/UX & Design",
    note: "Design tools and component libraries for user-friendly interfaces.",
    tools: [
      { name: "Figma", Icon: SiFigma },
      { name: "shadcn/ui", Icon: SiShadcnui },
      { name: "DaisyUI", Icon: SiTailwindcss },
      { name: "Material UI", Icon: FaPalette },
      { name: "UI Kitten", Icon: FaMobileAlt },
    ],
  },
  {
    key: "backend",
    name: "Backend & APIs",
    note: "Server-side tools, email services, and API development.",
    tools: [
      { name: "REST API", Icon: FaPlug },
      { name: "Nodemailer", Icon: FaEnvelope },
      { name: "CRUD", Icon: FaDatabase },
    ],
  },
  {
    key: "database",
    name: "Database",
    note: "Data storage and real-time services.",
    tools: [
      { name: "Firebase", Icon: SiFirebase },
      { name: "Firebase Auth", Icon: SiFirebase },
      { name: "Firebase Storage", Icon: SiFirebase },
      { name: "MySQL", Icon: FaDatabase },
      { name: "Google Sheets", Icon: SiGooglesheets },
    ],
  },
  {
    key: "principles",
    name: "Principles",
    note: "Practices for maintainable, reliable software.",
    tools: [
      { name: "System Design", Icon: FaLayerGroup },
      { name: "Clean Architecture", Icon: FaLayerGroup },
      { name: "Debugging", Icon: FaCode },
      { name: "Feature Validation", Icon: FaPlug },
    ],
  },
  {
    key: "tools",
    name: "Tools",
    note: "Version control and everyday development tools.",
    tools: [
      { name: "Git", Icon: FaGitAlt },
      { name: "GitHub", Icon: FaGithub },
      { name: "VS Code", Icon: VscVscode },
      { name: "Cursor", Icon: FaMousePointer },
      { name: "Appsmith", Icon: SiAppsmith },
      { name: "Google Maps", Icon: SiGooglemaps },
      { name: "Leaflet", Icon: SiLeaflet },
      { name: "Nyckel AI", Icon: FaBrain },
    ],
  },
];

const TOTAL = GROUPS.reduce((sum, group) => sum + group.tools.length, 0);

export default function TechTools() {
  return (
    <div className="tech-layout">
      <section className="tech-panel" aria-labelledby="tech-title">
        <header className="tech-header">
          <h2 id="tech-title" className="tech-title">
            Tech tools
          </h2>

          <span className="tech-rule" aria-hidden="true" />

          <span className="tech-count" aria-label={`${TOTAL} tools`}>
            {TOTAL}
          </span>
        </header>

        <div className="tech-grid">
          {GROUPS.map((group) => (
            <article key={group.key} className="tech-card">
              <h3 className="tech-card-name">{group.name}</h3>

              <p className="tech-card-note">{group.note}</p>

              <ul className="tech-tools">
                {group.tools.map(({ name, Icon }) => (
                  <li key={name} className="tech-tool">
                    {createElement(Icon, {
                      className: "tech-tool-icon",
                      "aria-hidden": true,
                    })}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
