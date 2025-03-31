import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
export const HERO_CONTENT = `I’m passionate about deep learning and machine learning, with hands-on experience from internships at SAP Labs and Sacha Engineering, where I worked on AI-driven vendor recommendations and aerodynamic analysis. Proficient in Python,c++ and frameworks like Pytorch, I’ve also explored web development through projects like a News website and a portfolio using React and Tailwind. My goal is to create innovative AI solutions that address real-world challenges and enhance user experiences.`;

export const ABOUT_TEXT = `I’m Joel Ebenezer, a B.Tech student in Artificial Intelligence and Data Science at PSG Institute of Technology and Applied Research (2022–2026), with a CGPA of 8.69. My passion for deep learning and machine learning drives my work, as seen in projects like denoising low-dose CT scans using RED-CNN and analyzing children’s artwork with fine-tuned models like Qwen-2 and Phi-3 and many other projects. I’ve gained practical experience through internships at SAP Labs and Sacha Engineering, sharpening my skills in Python, PyTorch, and other various frameworks. Additionally, I’ve worked on web development projects, including a News website using the MERN stack and a portfolio with React and Tailwind, giving me a foundational understanding of full-stack development. I thrive in collaborative environments, enjoy solving complex problems, and am eager to contribute to innovative AI solutions.`;

export const EXPERIENCES = [
  {
    year: "April 2024 – June 2024",
    role: "Machine Learning Engineer Intern",
    company: "SAP Labs",
    description: `Built a web scraping pipeline using Beautiful Soup to collect vendor details (products, price, rating, location) from IndiaMART, creating a robust dataset for analysis.
Embedded the collected data into a FAISS index using the MXBAAI similarity search model, enabling efficient retrieval of relevant vendors based on user queries.
Fine-tuned the Phi-3 model to recommend the best vendors by evaluating user criteria such as price, rating, and location, achieving an accuracy of 89.17%.
Developed a system where user product searches retrieve top vendors from the FAISS index, which are then passed to the fine-tuned Phi-3 for personalized recommendations.`,
    technologies: ["Javascript", "Pytorch", "FAST API", "FAISS Index"],
  },
  {
    year: "August 2024 – November 2024",
    role: "Machine Learning Engineer Intern",
    company: "Sacha Engineering",
    description: `Designed a surrogate modeling system to predict drag coefficients for automobiles, reducing the computational cost of traditional CFD simulations.
Utilized CAD design parameters as input features, training a hybrid model combining ResNet and Gradient Boosting on the DrivAerNet dataset from GitHub.
Achieved a high prediction accuracy of 98.62%, providing a reliable and efficient alternative to CFD simulations for aerodynamic analysis.
Streamlined the design-to-analysis pipeline, enabling faster iterations and cost-effective evaluation of vehicle aerodynamics.`,
    technologies: ["PyTorch", "ResNet", "Gradient Boosting"]
  },
];

export const PROJECTS = [
  {
    title: "Low-Dose CT Scan Denoising",
    image: project1,
    description:
      "Developed a web-based system to denoise low-dose CT scans, improving image quality for medical diagnostics using the RED-CNN model.Built a Django backend to process DICOM/IMA images and integrated real-time denoising capabilities for efficient workflows.Designed a responsive JavaScript frontend, enabling seamless upload, visualization, and download of denoised images.Implemented quantitative evaluation metrics (PSNR, SNR, SSIM) to assess denoising performance, ensuring high-quality outputs.",
    technologies: ["RED-CNN", "Django", "JavaScript",],
    demoLink: "https://drive.google.com/file/d/1-_est69XeAdbp_6C9H2lsAKPiJOw_M5d/view",
  },
  {
    title: "KidsArtPsychology",
    image: project2,
    description:
      "Created a system to analyze children’s drawings and infer emotions and thought patterns using AI-driven insights.Fine-tuned Qwen-2 for image captioning, generating detailed descriptions of objects, colors, and themes in the artwork.Trained Phi-3 on psychological case studies to interpret captions and extract meaningful psychological insights.Developed a pipeline where Qwen-2 generates captions, which are then analyzed by Phi-3, providing actionable interpretations for educators and psychologists.",
    technologies: ["Qwen-2", "Phi-3","Image Captioning", "Fine-tuning"],
    demoLink: "https://drive.google.com/drive/folders/1C-XvasGt3X6bLeWwMUzZWduCApd8g50T",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Bootstrap"],
    demoLink: "https://low-dose-ct-demo.example.com",
  },
  {
    title: "News Chatter",
    image: project4,
    description:
      "Built a full-stack news aggregation platform using the MERN stack, allowing users to interact with news articles fetched via various APIs.Implemented features for users to upvote, downvote, and comment on news articles, fostering engagement and discussion.Designed a responsive frontend with React and styled it using CSS for an intuitive user experience.Developed a backend with Node.js, Express.js, and MongoDB to manage user interactions, store comments, and handle API integrations securely.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    demoLink: "https://low-dose-ct-demo.example.com",
  },

  {
    title: "Pest Detection",
    image: project5,
    description:
      "Built a real-time pest detection system for agriculture using an automated field camera integrated with a Raspberry Pi.Designed a pipeline where the camera captures images every 4 hours, processed by ResNet for accurate pest identification.Implemented a RAG model to generate prerequisites and alert farmers if pests are detected, enabling timely interventions.Created a user-friendly interface with HTML, CSS, and JavaScript for farmers to monitor pest activity and receive actionable insights.",
    technologies: ["RAG", "ResNet", "Raspberry Pi", "HTML", "CSS"],
    demoLink: "https://drive.google.com/drive/folders/1Qib7GxLfwtaCiBk26SPo1OZgZnz7XetB",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
