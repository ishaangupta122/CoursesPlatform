import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialcourseInfo = {
  name: "",
  price: "",
  image: "",
  type: "",
  description: "",
};

function AddCourse(props) {
  const [courseInfo, setcourseInfo] = useState(initialcourseInfo);

  useEffect(() => {}, []);

  const addNewCourse = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/courses/`, courseInfo);
      if (response) {
        props.setCourseAdded();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Course-view _add-view">
      <div className="box">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Couse Name</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Name..."
                value={courseInfo.name}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, name: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Price</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Price..."
                value={courseInfo.price}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, price: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Image Link</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Link..."
                value={courseInfo.image}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, image: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Type</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Type Here..."
                value={courseInfo.type}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, type: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-30 col-md-50">
            <p>
              <b>Description</b>
              <textarea
                type="text"
                className="form-control"
                placeholder="Write Description Here..."
                value={courseInfo.description}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, description: e.target.value })
                }
                style={{ fontSize: ".9rem" }}
              />
            </p>
          </div>
        </div>
      </div>

      <button className="btn btn-success" onClick={() => addNewCourse()}>
        Add New Course
      </button>
    </div>
  );
}

export default AddCourse;
