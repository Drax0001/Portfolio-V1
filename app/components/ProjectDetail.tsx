"use client";

import { ProjectType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface Props {
  project: ProjectType;
}

export default function ProjectDetail({ project }: Props) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<{
    src: any;
    alt: string;
    title: string;
  } | null>(null);

  const handleBackClick = () => {
    router.back();
  };

  const isDemoAvailable = project.demoLink && project.demoLink !== "#";

  const openImageModal = (src: any, alt: string, title: string) => {
    setSelectedImage({ src, alt, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Animation variants for staggered content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="bg-purple-custom min-h-screen">
      <div className="px-8 max-w-2xl mx-auto md:px-6 sm:px-4">
        {/* Header with back navigation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-8 md:py-6"
        >
          <div className="flex items-center justify-between mb-6 md:flex-col md:gap-4 md:items-start">
            <motion.button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-white hover:text-reddish transition-colors duration-300 font-satoshi"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>

            <div className="flex items-center gap-4 md:w-full md:justify-start sm:flex-col sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black-high-opacity hover:bg-opacity-40 text-white px-4 py-2 rounded-lg transition-all duration-300 font-satoshi sm:w-full sm:justify-center"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </motion.div>

              {isDemoAvailable ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-reddish hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all duration-300 font-satoshi sm:w-full sm:justify-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 bg-gray-600 text-gray-300 px-4 py-2 rounded-lg font-satoshi cursor-not-allowed sm:w-full sm:justify-center">
                  <ExternalLink className="w-5 h-5" />
                  Demo Coming Soon
                </div>
              )}
            </div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-inter font-bold text-white mb-2 md:text-3xl sm:text-2xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg font-satoshi md:text-base"
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="relative w-full h-80 md:h-64 sm:h-48 rounded-lg overflow-hidden bg-black-high-opacity shadow-lg cursor-pointer"
            onClick={() =>
              openImageModal(
                project.image,
                project.title,
                `${project.title} - Main Image`
              )
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 pb-8"
        >
          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              About This Project
            </h2>
            <p className="text-gray-300 font-satoshi leading-relaxed md:text-sm">
              {project.detailedDescription || project.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-purple-custom text-white px-4 py-2 rounded-lg font-satoshi text-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 text-gray-300 font-satoshi md:text-sm"
                >
                  <motion.span
                    className="text-reddish mt-1 text-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    •
                  </motion.span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Project Gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
              whileHover={{
                boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-48 md:h-40 sm:h-32 rounded-lg overflow-hidden bg-black-high-opacity cursor-pointer"
                    onClick={() =>
                      openImageModal(
                        image,
                        `${project.title} - Image ${index + 1}`,
                        `${project.title} - Gallery Image ${index + 1}`
                      )
                    }
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links Section */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Project Links
            </h2>
            <div className="flex flex-col sm:flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-custom hover:bg-opacity-80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-satoshi w-full"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </Link>
              </motion.div>

              {isDemoAvailable ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-reddish hover:bg-opacity-80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-satoshi w-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Try Live Demo
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center gap-2 bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-satoshi cursor-not-allowed w-full">
                  <ExternalLink className="w-5 h-5" />
                  Demo Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        src={selectedImage?.src}
        alt={selectedImage?.alt || ""}
        title={selectedImage?.title}
      />
    </main>
  );
}
