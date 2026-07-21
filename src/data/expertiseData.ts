import TechConsultingImg from "../../public/coreStrengthUpdatedimg.jpg";
import AdvisoryImg from "../../public/black-smart-solution.jpeg";
import TrainingImg from "../../public/smart-solution-img.jpeg";

export interface Expertise {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  keyPoints: string[];
  image: any;
  color: string;
}

export const expertise: Expertise[] = [
  {
    id: "tech-consulting",
    title: "Technology Consulting",
    subtitle: "Innovate. Transform. Lead.",
    icon: "💻",
    description: "We architect and implement scalable, future-proof technology solutions that drive digital transformation and align with your strategic goals.",
    keyPoints: [
      "IT Strategy & Roadmapping",
      "Cloud Migration & Optimization",
      "Application Development",
      "System Integration",
      "Cybersecurity Framework Design"
    ],
    image: TechConsultingImg,
    color: "primary"
  },
  {
    id: "advisory",
    title: "Strategic Advisory",
    subtitle: "Guidance for Sustainable Success",
    icon: "🎯",
    description: "Our advisory services provide strategic insights to enhance resilience, ensure compliance, and optimize your organizational resources.",
    keyPoints: [
      "Governance, Risk & Compliance",
      "Agile Transformation",
      "PMO Design & Implementation",
      "Operational Efficiency Audits",
      "Procurement Strategy"
    ],
    image: AdvisoryImg,
    color: "secondary"
  },
  {
    id: "digital-skills",
    title: "Digital Skills Training",
    subtitle: "Empower Your Team",
    icon: "📚",
    description: "Comprehensive training programs designed to equip your workforce with in-demand, practical skills for the digital economy.",
    keyPoints: [
      "Project & Program Management",
      "Product Management",
      "Data Analysis",
      "Scrum & Agile Methodologies",
      "Business Analysis"
    ],
    image: TrainingImg,
    color: "accent"
  }
];
