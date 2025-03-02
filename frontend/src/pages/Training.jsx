import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, DEFAULT_IMG_URL } from "../config.js";

const Training = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${BASE_URL}/api/training`);
        setTrainings(response.data);
        setLoading(false);
        console.log("Training: ", response.data);
      } catch (err) {
        setError("Failed to load trainings.");
        setLoading(false);
        console.error(err);
      }
    };
    fetchTrainings();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {loading ? (
            <div className="flex items-center justify-center min-h-[70vh] mx-auto">
              <div className="relative">
                <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
                <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent shadow-md"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center w-full">
              <p className="text-xl text-red-500">{error}</p>
            </div>
          ) : trainings.length === 0 ? (
            <div className="text-center w-full">
              <p className="text-xl">No trainings open!</p>
            </div>
          ) : (
            <div className="flex flex-wrap -mx-1 lg:-mx-4 w-full">
              {trainings.map((training) => (
                <div
                  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex"
                  key={training._id}
                >
                  <article className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
                    <img
                      alt="Placeholder"
                      className="block w-full h-[300px] object-cover"
                      src={training.image || DEFAULT_IMG_URL}
                    />
                    <div className="flex flex-col flex-1 p-4">
                      <header className="flex items-center justify-between mb-2">
                        <h1 className="text-lg">
                          <Link
                            className="text-black underline"
                            to={`/trainingDetail/${training._id}`}
                          >
                            {truncateText(training.name, 25)}
                          </Link>
                        </h1>
                        <p className="text-grey-darker text-sm">
                          ₹{training.price}
                        </p>
                      </header>
                      <footer className="flex-1 mb-4">
                        <p className="text-sm">
                          {truncateText(training.description, 120)}
                        </p>
                      </footer>
                      <div className="text-right">
                        <Link to={`/trainingDetail/${training._id}`}>
                          <button
                            type="button"
                            className="px-4 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Training;
