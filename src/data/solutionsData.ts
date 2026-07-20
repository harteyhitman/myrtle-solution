import TechConsultingImg from "../../public/ourSolution/solution1.jpg";
import AdvisoryImg from "../../public/ourSolution/solution2.jpg";
import TrainingImg from "../../public/ourSolution/solution3.jpg";

export interface Solution {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: any; // You might want to define a more specific type for Image if possible
  gradient: string;
  buttonColor: string;
  items: string[];
}

export const solutions: Solution[] = [
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    description: "Innovative Strategies for Digital Transformation",
    fullDescription: "Deploying future-ready technology and driving business transformation.",
    image: TechConsultingImg,
    gradient: "blue",
    buttonColor: "blue",
    items: [
      "Information Technology Consulting",
      "Web and Mobile Application Development",
      "Business Transformation and ERP Integration",
      "Technology Product Design, Development and Launch"
    ]
  },
  {
    id: "advisory",
    title: "Advisory",
    description: "Expert Guidance & Strategic Planning",
    fullDescription: "Strategic, high-level guidance for resilience, compliance, and optimized resource management.",
    image: AdvisoryImg,
    gradient: "green",
    buttonColor: "green",
    items: [
      "Cybersecurity and GRC",
      "PCI - DSS Audit",
      "Enterprise Agile Transformation",
      "Project and Program Management Office as a Service",
    ]
  },
  {
    id: "training",
    title: "IT Skill Training",
    description: "Empowering the Next Generation",
    fullDescription: "Comprehensive training programs focused on high-demand, practical skills.",
    image: TrainingImg,
    gradient: "yellow",
    buttonColor: "yellow",
    items: [
      "Project Management",
      "Program Management",
      "Technical Program Management",
      "Project Planning using MsP, seePrimavera",
      "Product Management",
      "Scrum and Hybrid",
      "Business Analysis",
      "Data Analysis",
      "Cybersecurity and GRC",
    ]
  }
];