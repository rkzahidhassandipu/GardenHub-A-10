import { useState, useEffect, useContext } from "react";
import { FaSeedling, FaEye, FaEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import MyTipHeader from "../../Components/MyTip/MyTipHeader";
import Delete from "../../Components/Delete/Delete";
import { Helmet } from "react-helmet";

const MyTip = () => {
  const allTips = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user && allTips) {
      const filtered = allTips.filter((tip) => tip.userEmail === user.email);
      setMyTips(filtered);
    }
  }, [user, allTips]);

  const handleDeleteTip = (deletedId) => {
    setMyTips((prevTips) => prevTips.filter((tip) => tip._id !== deletedId));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet>
        <title>My Tips</title>
        <meta name="description" content="View and manage your gardening tips." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <MyTipHeader />

        {myTips.length === 0 ? (
          <div className="bg-white text-center p-16 rounded-lg shadow-md">
            <FaSeedling className="text-4xl mx-auto text-green-500 mb-4" />
            <p className="text-xl font-semibold text-gray-800 mb-2">
              You haven't shared any tips yet.
            </p>
            <p className="text-gray-600 mb-6">
              Share your first gardening wisdom with the community!
            </p>
            <Link to={`/dashboard/sharetip`}>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow">
                Share Your First Tip
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <table className="w-full table-auto text-left">
              <thead className="bg-green-100 text-green-800 uppercase text-sm border-b">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Availability</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myTips.map((tip) => (
                  <tr key={tip._id} className="hover:bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium text-gray-800">{tip.title}</td>
                    <td className="px-6 py-4 text-gray-700">{tip.category}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">
                        {tip.availability || "Public"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <Link to={`/shareTips/${tip._id}`}>
                        <button className="text-green-600 hover:text-green-800" title="View">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to={`/updated/${tip._id}`}>
                        <button className="text-blue-600 hover:text-blue-800" title="Edit">
                          <FaEdit />
                        </button>
                      </Link>
                      <Delete id={tip._id} onDelete={handleDeleteTip} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTip;
