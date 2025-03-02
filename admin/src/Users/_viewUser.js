import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialUserInfo = {
  name: "",
  email: "",
  description: "",
  price: 0,
  image: "",
  type: 0,
  courses: [],
};

function ViewUser(props) {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/` + props.userId);
      if (response) {
        console.log(response.data);
        setUserInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='Course-view'>
      <div className='box'>
        <div className='row'>
          <div className='col-12'>
            <p>
              <span style={{ fontWeight: "bold" }}>Full Name: </span>
              <span>{userInfo.name}</span>
            </p>
          </div>
          <div className='col-12'>
            <p>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              <span>{userInfo.email}</span>
            </p>
          </div>
          <div className='col-12'>
            <p>
              <span style={{ fontWeight: "bold" }}>Purchased Courses: </span>
              <span>
                {userInfo.courses.length > 0 ? (
                  <ul>
                    {userInfo.courses.map((course, index) => (
                      <li key={index}>
                        <strong>{course.name}</strong>: {course.description} - ₹
                        {course.price}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No courses available"
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
