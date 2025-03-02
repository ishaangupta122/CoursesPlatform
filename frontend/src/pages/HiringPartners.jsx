import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const HiringPartners = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${BASE_URL}/api/placements`);
        setPlacements(response.data);
        setLoading(false);
        console.log("Placements: ", response.data);
      } catch (err) {
        setError("Failed to load placements.");
        setLoading(false);
        console.error(err);
      }
    };
    fetchPlacements();
  }, []);

  return (
    <>
      <div className='w-full'>
        <div className='mx-auto p-4'>
          <div className='flex flex-col' data-aos='fade-up'>
            <div className='lg:max-w-4xl w-full mx-auto overflow-x-auto'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr>
                        <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider'>
                          Company Name
                        </th>
                        <th className='px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider'>
                          Average Stipend
                        </th>
                      </tr>
                    </thead>
                    {loading ? (
                      <div className='flex items-center justify-center min-h-[70vh] mx-auto'>
                        <div className='relative'>
                          <div className='w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200'></div>
                          <div className='w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent shadow-md'></div>
                        </div>
                      </div>
                    ) : error ? (
                      <div className='text-center w-full'>
                        <p className='text-xl text-red-500'>{error}</p>
                      </div>
                    ) : placements.length === 0 ? (
                      <div className='text-center w-full'>
                        <p className='text-xl'>No placements found!</p>
                      </div>
                    ) : (
                      <tbody className='bg-white divide-y divide-gray-200'>
                        {placements.map((placements, index) => (
                          <tr key={index}>
                            <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                              {placements.company}
                            </th>
                            <th className='px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                              ₹ {placements.stipend} LPA
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringPartners;
