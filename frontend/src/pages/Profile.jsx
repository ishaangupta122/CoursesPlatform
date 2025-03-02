import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config.js";

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Profile
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm text-gray-600"
              style={{ fontWeight: "700" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
              defaultValue={name}
              disabled
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-gray-600"
              style={{ fontWeight: "700" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
              defaultValue={email}
              disabled
            />
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-2">{success}</p>
          )}
          {/* <button
						className={`mt-5 tracking-wide font-semibold ${
							loading
								? 'bg-gray-400 cursor-not-allowed'
								: 'bg-indigo-500 hover:bg-indigo-700'
						} text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
						disabled={loading}
					>
						{loading ? (
							<svg
								className='w-6 h-6 mr-3 animate-spin'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
									fill='none'
								/>
							</svg>
						) : (
							<>
								<svg
									className='w-6 h-6 -ml-2'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
									<circle cx='8.5' cy='7' r='4' />
									<path d='M20 8v6M23 11h-6' />
								</svg>
								<span className='ml-3'>Update Profile</span>
							</>
						)}
					</button> */}
        </form>
      </div>
    </>
  );
};

export default Profile;
