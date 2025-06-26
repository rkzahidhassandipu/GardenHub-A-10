import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaPlusCircle } from "react-icons/fa";
import { FiSearch, FiEye, FiFilter } from "react-icons/fi";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const difficultyColors = {
  Easy: "bg-green-700 text-white",
  Medium: "bg-yellow-700 text-white",
  Hard: "bg-red-700 text-white",
};

const BrowseTips = () => {
  3;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const browseTips = useLoaderData();
  console.log(browseTips);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All Difficulties");

  const filteredTips = browseTips.filter((tip) => {
    const matchAvailability = tip.availability === "public";

    const matchSearch =
      tip.title.toLowerCase().includes(search.toLowerCase()) ||
      tip.category.toLowerCase().includes(search.toLowerCase());

    const matchDifficulty =
      difficulty === "All Difficulties" ||
      tip.difficulty.toLowerCase() === difficulty.toLowerCase();

    return matchAvailability && matchSearch && matchDifficulty;
  });

  const handleReadMore = (tip) => {
    if (user) {
      navigate(`/shareTips/${tip._id}`);
    } else {
      navigate("/login");
      toast.info("Please log in to view details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pb-20 from-gray-800 to-gray-900 text-white p-6">
      <Helmet>
        <title>Browse Tips</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Browse Gardening Tips</h1>
            <p className="text-gray-400">
              Discover wisdom from fellow gardeners.
            </p>
          </div>
          <Link to="/sharetip">
            <button className="bg-green-500 hover:bg-green-600 flex items-center text-white px-4 py-2 rounded-lg font-semibold">
              <FaPlusCircle className=" mr-3" /> Share Your Own Tip
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 w-full">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search tips by title, category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <div className="relative">
            <select
              className="bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="All Difficulties">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-900 text-left">
              <tr>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Difficulty</th>
                <th className="py-3 px-4">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredTips.map((tip, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-gray-700/30"
                >
                  <td className="py-3 px-4">
                    <img className="w-10 rounded" src={tip.imageUrl} alt="" />
                  </td>
                  <td className="py-3 px-4 text-green-400 font-medium">
                    {tip.title}
                  </td>
                  <td className="py-3 px-4">{tip.category}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        difficultyColors[capitalizeFirstLetter(tip.difficulty)]
                      }`}
                    >
                      {capitalizeFirstLetter(tip.difficulty)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => handleReadMore(tip)}>
                      <FiEye className="text-green-400 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTips.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No tips found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
