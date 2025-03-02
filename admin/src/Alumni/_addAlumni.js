import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialAlumniInfo = {
  name: "",
  package: "",
  image: "",
  company: "",
  batch: "",
};

function AddAlumni(props) {
  const [alumniInfo, setAlumniInfo] = useState(initialAlumniInfo);

  useEffect(() => {}, []);

  const addNewAlumni = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/alumni/`, alumniInfo);
      if (response) {
        props.setAlumniAdded();
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
              <b>Alumni Name</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Alumni Name..."
                value={alumniInfo.name}
                onChange={(e) =>
                  setAlumniInfo({
                    ...alumniInfo,
                    name: e.target.value,
                  })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Company</b>
              <input
                type="String"
                className="form-control"
                placeholder="Enter Company Name..."
                value={alumniInfo.company}
                onChange={(e) =>
                  setAlumniInfo({
                    ...alumniInfo,
                    company: e.target.value,
                  })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Package</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Package Here..."
                value={alumniInfo.package}
                onChange={(e) =>
                  setAlumniInfo({
                    ...alumniInfo,
                    package: e.target.value,
                  })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Batch</b>
              <input
                type="text"
                className="form-control"
                placeholder="Write Batch Here..."
                value={alumniInfo.batch}
                onChange={(e) =>
                  setAlumniInfo({
                    ...alumniInfo,
                    batch: e.target.value,
                  })
                }
              />
            </p>
          </div>
          <div className="col-sm-30 col-md-50">
            <p>
              <b>Image Link</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Link..."
                value={alumniInfo.image}
                onChange={(e) =>
                  setAlumniInfo({
                    ...alumniInfo,
                    image: e.target.value,
                  })
                }
              />
            </p>
          </div>
        </div>
      </div>

      <button className="btn btn-success" onClick={() => addNewAlumni()}>
        Add New Alumni
      </button>
    </div>
  );
}

export default AddAlumni;
