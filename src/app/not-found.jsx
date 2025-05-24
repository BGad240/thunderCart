import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                Oops! Page not found
            </h2>
            <p className="text-gray-500 mb-6">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
}
  