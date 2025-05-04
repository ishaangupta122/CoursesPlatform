import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialUserInfo = {
  id: "",
  name: "",
  price: 0,
  description: "",
  image: "",
  type: 0,
};

function EditUser(props) {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    setUserInfo({ ...userInfo, id: props.UserId });
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/` + props.userId);
      if (response) {
        console.log(response);
        setUserInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const editExistingUser = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}/user/` + props.userId,
        userInfo
      );
      if (response) {
        props.setUserEdited();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='Course-view _add-view'>
      <div className='box'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Course Name:</span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Full Name'
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Type</span>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Description'
                value={userInfo.type}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, type: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Price:</span>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Price'
                value={userInfo.price}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, price: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Image Link </span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Phone Number'
                value={userInfo.image}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, image: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-10'>
            <p>
              <span>Description</span>
              <textarea
                type='text'
                className='form-control'
                placeholder='Enter Website'
                value={userInfo.description}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, description: e.target.value })
                }
              />
            </p>
          </div>
        </div>
      </div>
      <button className='btn btn-success' onClick={() => editExistingUser()}>
        Edit User
      </button>
    </div>
  );
}

export default EditUser;
