import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
