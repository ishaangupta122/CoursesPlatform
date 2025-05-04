import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialUserInfo = {
  name: "",
  price: "",
  image: "",
  type: "",
  description: "",
};

function AddUser(props) {
  const [UserInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {}, []);

  const addNewUser = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/user/`, UserInfo);
      if (response) {
        props.setUserAdded();
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
              <span>Name:</span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Name ...'
                value={UserInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...UserInfo, name: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Price:</span>
              <input
                type='Number'
                className='form-control'
                placeholder='Enter Price ...'
                value={UserInfo.price}
                onChange={(e) =>
                  setUserInfo({ ...UserInfo, price: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Image Link:</span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Image Address'
                value={UserInfo.image}
                onChange={(e) =>
                  setUserInfo({ ...UserInfo, image: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Enter Type</span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Type here ...'
                value={UserInfo.type}
                onChange={(e) =>
                  setUserInfo({ ...UserInfo, type: e.target.value })
                }
              />
            </p>
          </div>
          <div className='col-sm-30 col-md-50'>
            <p>
              <span>Description</span>
              <textarea
                type='text'
                className='form-control'
                placeholder='Write Description here'
                value={UserInfo.description}
                onChange={(e) =>
                  setUserInfo({ ...UserInfo, description: e.target.value })
                }
              />
            </p>
          </div>
        </div>
      </div>

      <button className='btn btn-success' onClick={() => addNewUser()}>
        Add New User
      </button>
    </div>
  );
}

export default AddUser;
