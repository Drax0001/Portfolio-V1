import { ProjectType } from "@/type";
import {
  alumConnect,
  cinemoodThumbnail,
  elvaBookshop,
  foodRecommendationThumbnail,
  plantDoctor,
  qrCampusThumbnail,
  foodRecommendationDetail,
  foodRecommendationDetail1,
  foodRecommendationDetail2,
  foodRecommendationDetail3,
  qrCampusDetail,
  qrCampusDetail1,
  qrCampusDetail2,
  dummyImage,
} from "./images";

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

export const projects: ProjectType[] = [
  {
    title: "AlumConnect",
    slug: generateSlug("AlumConnect"),
    description:
      "Alumni Mentorship Platform for the University of Buea (Unofficial)",
    detailedDescription:
      "AlumConnect is a comprehensive alumni mentorship platform designed to bridge the gap between current students and alumni of the University of Buea. The platform facilitates meaningful connections through structured mentorship programs, networking events, and career guidance sessions. Built with modern web technologies, it features user authentication, profile management, event scheduling, and real-time messaging capabilities.",
    image: alumConnect,
    images: [dummyImage, dummyImage, dummyImage], // Placeholder images - replace with actual project images later
    technologies: ["Next.js", "Typescript", "PostgreSQL"],
    features: [
      "Event Management",
      "Responsive design",
      "Easy to use",
      "User Authentication",
      "Profile Management",
      "Real-time Messaging",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/AlumConnect",
  },
  {
    title: "Food Recommendation App",
    slug: generateSlug("Food Recommendation App"),
    description:
      "Food recommendation mobile application based on age, allergies and dietary  restrictions",
    detailedDescription:
      "A personalized food recommendation mobile application that takes into account user preferences, age, allergies, and dietary restrictions to suggest suitable meals. The app uses intelligent algorithms to analyze user data and provide customized meal plans, nutritional information, and recipe suggestions. Features include meal planning, grocery list generation, and integration with popular food delivery services.",
    image: foodRecommendationThumbnail,
    images: [
      foodRecommendationDetail,
      foodRecommendationDetail1,
      foodRecommendationDetail2,
      foodRecommendationDetail3,
    ],
    technologies: ["React Native", "Expo", "Redux Toolkit"],
    features: [
      "Food Recommendation",
      "Meal Planning",
      "Allergy Management",
      "Nutritional Analysis",
      "Grocery Lists",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/Food-Recommendation",
  },
  {
    title: "QR Campus",
    slug: generateSlug("QR Campus"),
    description:
      "QR Generation and recognition mobile app for course registration",
    detailedDescription:
      "QR Campus is a mobile application designed to streamline the course registration process at universities through QR code technology. Students can generate unique QR codes for course enrollment, while administrators can scan these codes for quick registration processing. The app integrates with existing university systems and provides real-time updates on course availability, schedule conflicts, and registration status.",
    image: qrCampusThumbnail,
    images: [qrCampusDetail, qrCampusDetail1, qrCampusDetail2],
    technologies: ["React Native", "Express.js", "PostgreSQL"],
    features: [
      "QR Code generation",
      "Access to mobile native APIs",
      "QR Code Recognition",
      "Course Management",
      "Real-time Updates",
      "Schedule Conflict Detection",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/QR-Campus",
  },
  {
    title: "Cinemood",
    slug: generateSlug("Cinemood"),
    description: "Web application for movie recommendations based on user mood",
    detailedDescription:
      "Cinemood is an innovative web application that recommends movies based on the user's current mood and preferences. Using AI-powered sentiment analysis and machine learning algorithms, the app analyzes user input to suggest the perfect movie for any emotional state. Features include mood tracking, personalized watchlists, movie reviews, and integration with popular streaming platforms for seamless viewing experiences.",
    image: cinemoodThumbnail,
    images: [dummyImage, dummyImage, dummyImage], // Placeholder images - replace with actual project images later
    technologies: ["Next.js", "Typescript", "AI"],
    features: [
      "Movie recommendation",
      "API",
      "AI integration",
      "Mood Analysis",
      "Personalized Watchlists",
      "Streaming Integration",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/Cinemood",
  },
];
