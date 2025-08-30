import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-purple-custom hover:bg-purple-custom/80 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
