import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialtrainingInfo = {
  id: "",
  name: "",
  price: 0,
  description: "",
  image: "",
  type: 0,
};

function EditTraining(props) {
  const [trainingInfo, setTrainingInfo] = useState(initialtrainingInfo);

  useEffect(() => {
    setTrainingInfo({ ...trainingInfo, id: props.TrainingId });
    fetchTrainingData();
  }, []);

  const fetchTrainingData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/training/` + props.trainingId
      );
      if (response) {
        console.log(response);
        setTrainingInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const editExistingTraining = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}/training/` + props.trainingId,
        trainingInfo
      );
      if (response) {
        props.setTrainingEdited();
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
              <b>Training Name</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Training Name..."
                value={trainingInfo.name}
                onChange={(e) =>
                  setTrainingInfo({ ...trainingInfo, name: e.target.value })
                }
                required
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
                value={trainingInfo.price}
                onChange={(e) =>
                  setTrainingInfo({ ...trainingInfo, price: e.target.value })
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
                value={trainingInfo.image}
                onChange={(e) =>
                  setTrainingInfo({ ...trainingInfo, image: e.target.value })
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
                value={trainingInfo.type}
                onChange={(e) =>
                  setTrainingInfo({ ...trainingInfo, type: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-12">
            <p>
              <b>Description</b>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter Description Here..."
                value={trainingInfo.description}
                onChange={(e) =>
                  setTrainingInfo({
                    ...trainingInfo,
                    description: e.target.value,
                  })
                }
                style={{ fontSize: ".9rem" }}
              />
            </p>
          </div>
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={() => editExistingTraining()}
      >
        Edit Training
      </button>
    </div>
  );
}

export default EditTraining;
