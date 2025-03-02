import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, razorpay_key_id } from "../config.js";

const PurchaseCourse = () => {
  const userId = localStorage.getItem("id");
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    phone: "",
    profession: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        console.error("Error fetching course: ", err);
        // setError('Failed to fetch course details. Please try again.');
      }
    };
    fetchCourse();
  }, [id]);

  // useEffect(() => {
  // 	const fetchTraining = async () => {
  // 		try {
  // 			const response = await axios.get(
  // 				`${BASE_URL}/api/training/${id}`
  // 			);
  // 			setCourse(response.data);
  // 		} catch (err) {
  // 			console.error('Error fetching Training: ', err);
  // 		}
  // 	};
  // 	fetchTraining();
  // }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${BASE_URL}/api/payment/createOrder`,
        {
          amount: course?.price,
          currency: "INR",
          receipt: `course-${course?._id}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        openRazorpay(
          response.data.order.id,
          response.data.order.amount,
          response.data.order.currency
        );
      } else {
        setError("Error creating order. Please try again.");
      }
    } catch (err) {
      console.error("Error creating order:", err);
      setError("An error occurred while creating the order. Please try again.");
    }
  };

  const openRazorpay = (orderId, amount, currency) => {
    const options = {
      key: razorpay_key_id,
      amount: amount,
      currency: currency,
      name: "Courses",
      description: `Payment for Course - ${course?.name}`,
      order_id: orderId,
      handler: async function (response) {
        try {
          const captureResponse = await axios.post(
            `${BASE_URL}/api/payment/capturePayment`,
            {
              payment_id: response.razorpay_payment_id,
              amount: amount / 100,
            }
          );

          if (captureResponse.data.success) {
            // Update user's courses after successful payment
            await axios.post(`${BASE_URL}/api/users/${userId}/courses`, {
              courseId: course?._id,
            });

            alert("Payment successful");
            navigate("/dashboard");
          } else {
            setError(
              captureResponse.data.details ||
                "Error capturing payment. Please try again."
            );
          }
        } catch (error) {
          console.error("Error capturing payment:", error);
          if (error.response && error.response.data) {
            setError(
              error.response.data.details ||
                "Error capturing payment. Please try again."
            );
          } else {
            setError("Error capturing payment. Please try again.");
          }
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-lg w-full mx-auto p-5 mt-20">
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-16">
        Enroll <span className="text-indigo-600">Now</span>
      </h3>

      {course && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-xl font-semibold">{course.name}</h4>
          <b>Price: </b>
          <span style={{ fontWeight: "500" }}>₹{course.price || 999}</span>
        </div>
      )}

      {/* {error && <div className='text-red-500 mb-4'>{error}</div>} */}

      <form className="w-full" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor={key}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id={key}
              name={key}
              type={
                key === "email" ? "email" : key === "phone" ? "tel" : "text"
              }
              value={value}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}

        <div className="flex justify-between w-full">
          <button
            type="submit"
            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseCourse;
