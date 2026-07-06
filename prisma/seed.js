const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

    console.log("Deleting existing jobs...");

    await prisma.job.deleteMany();

    console.log("Adding jobs...");

    await prisma.job.createMany({
  data: [
    {
      title: "Backend Developer",
      company: "Google",
      category: "Backend",
      description: "Develop scalable backend APIs using Java and Spring Boot.",
      skills: ["Java", "Spring Boot", "SQL", "Git"],
      minimumExperience: 1,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Pune",
      workMode: "HYBRID",
      salary: 1200000
    },
    {
      title: "Node.js Backend Developer",
      company: "Amazon",
      category: "Backend",
      description: "Build REST APIs using Node.js and Express.",
      skills: ["Node.js", "Express", "MongoDB", "JavaScript"],
      minimumExperience: 2,
      maximumExperience: 6,
      minimumEducation: "BTech",
      location: "Bangalore",
      workMode: "ONSITE",
      salary: 1400000
    },
    {
      title: "Python Backend Engineer",
      company: "Microsoft",
      category: "Backend",
      description: "Develop backend services using Django and PostgreSQL.",
      skills: ["Python", "Django", "PostgreSQL", "Git"],
      minimumExperience: 2,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Hyderabad",
      workMode: "HYBRID",
      salary: 1600000
    },
    {
      title: "Full Stack Developer",
      company: "Adobe",
      category: "Full Stack",
      description: "Develop full stack web applications using React and Node.js.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      minimumExperience: 1,
      maximumExperience: 4,
      minimumEducation: "BTech",
      location: "Pune",
      workMode: "REMOTE",
      salary: 1300000
    },
    {
      title: "Frontend Developer",
      company: "Flipkart",
      category: "Frontend",
      description: "Develop responsive user interfaces using React.",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      minimumExperience: 0,
      maximumExperience: 3,
      minimumEducation: "BTech",
      location: "Bangalore",
      workMode: "HYBRID",
      salary: 900000
    },
    {
      title: "Android Developer",
      company: "PhonePe",
      category: "Mobile",
      description: "Develop Android applications using Kotlin.",
      skills: ["Kotlin", "Android", "Firebase", "Git"],
      minimumExperience: 1,
      maximumExperience: 4,
      minimumEducation: "BTech",
      location: "Bangalore",
      workMode: "ONSITE",
      salary: 1100000
    },
    {
      title: "iOS Developer",
      company: "Apple",
      category: "Mobile",
      description: "Build iOS applications using Swift.",
      skills: ["Swift", "iOS", "Xcode", "Git"],
      minimumExperience: 2,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Hyderabad",
      workMode: "HYBRID",
      salary: 1800000
    },
    {
      title: "DevOps Engineer",
      company: "Infosys",
      category: "DevOps",
      description: "Manage CI/CD pipelines and cloud infrastructure.",
      skills: ["Docker", "Kubernetes", "AWS", "Linux"],
      minimumExperience: 2,
      maximumExperience: 6,
      minimumEducation: "BTech",
      location: "Pune",
      workMode: "HYBRID",
      salary: 1500000
    },
    {
      title: "Cloud Engineer",
      company: "IBM",
      category: "Cloud",
      description: "Deploy cloud infrastructure on AWS.",
      skills: ["AWS", "Terraform", "Linux", "Docker"],
      minimumExperience: 2,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Mumbai",
      workMode: "REMOTE",
      salary: 1700000
    },
    {
      title: "Data Engineer",
      company: "Oracle",
      category: "Data",
      description: "Build scalable ETL pipelines.",
      skills: ["Python", "SQL", "Spark", "Kafka"],
      minimumExperience: 2,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Bangalore",
      workMode: "HYBRID",
      salary: 1650000
    },
    {
      title: "Machine Learning Engineer",
      company: "NVIDIA",
      category: "AI",
      description: "Develop machine learning models.",
      skills: ["Python", "TensorFlow", "PyTorch", "NumPy"],
      minimumExperience: 1,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Pune",
      workMode: "REMOTE",
      salary: 1900000
    },
    {
      title: "AI Engineer",
      company: "OpenAI Labs",
      category: "AI",
      description: "Develop LLM-powered applications.",
      skills: ["Python", "LangChain", "OpenAI", "FastAPI"],
      minimumExperience: 2,
      maximumExperience: 6,
      minimumEducation: "BTech",
      location: "Remote",
      workMode: "REMOTE",
      salary: 2200000
    },
    {
      title: "C++ Software Engineer",
      company: "Siemens",
      category: "Systems",
      description: "Develop high-performance C++ software.",
      skills: ["C++", "STL", "OOP", "Git"],
      minimumExperience: 1,
      maximumExperience: 4,
      minimumEducation: "BTech",
      location: "Pune",
      workMode: "ONSITE",
      salary: 1350000
    },
    {
      title: "QA Automation Engineer",
      company: "TCS",
      category: "QA",
      description: "Automate testing using Selenium.",
      skills: ["Java", "Selenium", "TestNG", "Git"],
      minimumExperience: 1,
      maximumExperience: 4,
      minimumEducation: "BTech",
      location: "Nagpur",
      workMode: "HYBRID",
      salary: 1000000
    },
    {
      title: "Cyber Security Analyst",
      company: "Cisco",
      category: "Security",
      description: "Protect enterprise infrastructure and networks.",
      skills: ["Linux", "Networking", "Python", "Security"],
      minimumExperience: 2,
      maximumExperience: 5,
      minimumEducation: "BTech",
      location: "Mumbai",
      workMode: "ONSITE",
      salary: 1750000
    }
  ]
});

    console.log("Seed completed successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });