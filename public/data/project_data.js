import calm from "@/public/images/projects/calm.png";
import portfolio from "@/public/images/projects/portfolio.png";
import coe1 from "@/public/images/projects/coe_office/1.png";
import coe2 from "@/public/images/projects/coe_office/2.png";
import coe3 from "@/public/images/projects/coe_office/3.png";

const data = [
  {
    category: "PERN STACK",
    title: "Student Admission Portal",
    src: coe1,
    techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
    content: {
      desc: "The Student Admission Portal is a comprehensive platform designed to streamline the entire student admission process, offering a user-friendly interface for both applicants and administrators. From submitting applications to tracking admissions, the portal simplifies the journey for prospective students while ensuring efficiency and transparency for educational institutions. The website will used by my college in the future",
      img: {
        i1: coe1,
        i2: coe2,
        i3: coe3,
      },
    },
  },
  {
    category: "PERN STACK",
    title: "A Mental Health Awareness Platform",
    src: calm,
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    content: {
      desc: `Enhance Your Health with Our All-in-One Platform
Managing your health just got easier with our comprehensive platform, designed to streamline your wellness journey. This was the project that I built during my 3rd semester.

Book Appointments Effortlessly
Schedule visits with healthcare professionals in minutes. Choose your doctor, pick a time, and confirm your appointment—all in a few clicks.

Get Diagnostic Tests Done
Easily book and track your diagnostic tests. From routine check-ups to specialized screenings, our platform simplifies the process and keeps your results accessible.

Stay Informed with Articles and Blogs
Access a wealth of health information with our curated articles and blogs. Stay updated on the latest health trends and practical advice.

Connect with a Supportive Community
Engage with others who share your health interests. Join forums, participate in groups, and find support from a network of like-minded individuals.

Our platform brings everything you need into one place, making it simpler to manage your health and well-being.`,
      img: {
        i1: calm,
      },
    },
  },
  {
    category: "Front-End",
    title: "Personal Portfolio Website",
    src: portfolio,
    techStack: ["Next.js", "Tailwind CSS", "JavaScript"],
    content: {
      desc: `Built with Next.js, this portfolio highlights my journey and expertise in technology. It’s designed to reflect my interests and provide insight into my work.

Projects-> View a variety of projects that demonstrate my problem-solving skills and innovative approach.

Skills-> Learn about the technologies and tools I’ve mastered, showcasing my dedication to advancing in the tech field.

About Me-> Get to know more about my background, interests, and what drives me in the world of technology.

Explore this site to see how my passion for technology shapes my projects and professional journey.`,
      img: {
        i1: portfolio,
      },
    },
  },
];

export default data;
