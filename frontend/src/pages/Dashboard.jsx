import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config.js";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${BASE_URL}/api/users/${localStorage.getItem("id")}`
        );
        setUser(response.data);
        setLoading(false);
        console.log("User: ", response.data);
      } catch (err) {
        setError("Failed to load courses.");
        setLoading(false);
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto p-5 mt-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Your <span className="text-indigo-600">Enrollments</span>
          </h3>
        </div>
        {user?.courses?.length === 0 || user?.courses === undefined ? (
          <>
            <div className="text-center w-full">
              <p className="text-xl">No enrollments!</p>
            </div>
          </>
        ) : (
          <>
            {user?.courses?.map((course, index) => (
              <Link to={`/courseDetail/${course?._id}`} key={index}>
                <div className="max-w-sm bg-white mx-auto rounded-xl overflow-hidden md:max-w-2xl border mb-2 hover:shadow-md transition-all duration-200 my-5">
                  <div className=" md:flex">
                    <div>
                      <img
                        className="h-48 w-full md:h-full md:w-48 object-cover"
                        src={course?.image || DEFAULT_IMG_URL}
                        alt=""
                      />
                    </div>
                    <div className="p-8">
                      <div className="tracking-wide text-lg text-indigo-500 font-semibold">
                        {course?.name}
                      </div>
                      <p className="mt-1 block text-sm font-medium text-black">
                        {truncateText(course?.description, 100)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
