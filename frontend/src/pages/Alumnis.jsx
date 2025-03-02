import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, DEFAULT_IMG_URL } from "../config.js";

const Alumnis = () => {
  const [alumnis, setAlumnis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnis = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${BASE_URL}/api/alumni`);
        setAlumnis(response.data);
        setLoading(false);
        console.log("Alumnis: ", response.data);
      } catch (err) {
        setError("Failed to load alumnis.");
        setLoading(false);
        console.error(err);
      }
    };
    fetchAlumnis();
  }, []);

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
          ) : alumnis?.length === 0 ? (
            <div className="text-center w-full">
              <p className="text-xl">No alumnis found!</p>
            </div>
          ) : (
            <div className="flex flex-wrap -mx-1 lg:-mx-4 w-full">
              {alumnis.map((alumni) => (
                <div
                  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex items-center justify-center"
                  key={alumni._id}
                >
                  <article className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
                    <img
                      alt="Placeholder"
                      className="block w-full h-[300px] object-cover"
                      src={alumni.image || DEFAULT_IMG_URL}
                    />
                    <div className="flex flex-col flex-1 p-4">
                      <header className="flex items-center justify-between mb-2">
                        <h1 className="text-lg">
                          <b>{alumni.name}</b>
                        </h1>
                        <p className="text-grey-darker text-sm">
                          {alumni.batch}
                        </p>
                      </header>
                      <footer className="flex-1">
                        <p className="text-sm">
                          Placed at{" "}
                          <b className="text-base">
                            {alumni.company || "Microsoft"}
                          </b>{" "}
                          - {alumni.package + " LPA" || "N/A"}
                        </p>
                      </footer>
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

export default Alumnis;
