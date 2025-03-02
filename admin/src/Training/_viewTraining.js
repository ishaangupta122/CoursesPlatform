import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialtrainingInfo = {
  name: "",
  description: "",
  price: 0,
  image: "",
  type: 0,
};

function ViewTraining(props) {
  const [trainingInfo, setTrainingInfo] = useState(initialtrainingInfo);

  useEffect(() => {
    fetchTrainingData();
  }, []);

  const fetchTrainingData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/training/` + props.trainingId
      );
      if (response) {
        console.log(response.data);
        setTrainingInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Course-view">
      <div className="box">
        <div className="row">
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Training Name: </span>
              <span>{trainingInfo.name}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Price: </span>
              <span>₹{trainingInfo.price}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Type: </span>
              <span>{trainingInfo.type}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Image: </span>
              <span
                style={{
                  wordWrap: "break-word",
                  wordBreak: "break-all",
                  overflowWrap: "break-word",
                }}
              >
                {trainingInfo.image}
              </span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Description: </span>
              <span>{trainingInfo.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTraining;
