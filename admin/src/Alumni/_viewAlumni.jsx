import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialAlumniInfo = {
  name: "",
  batch: "",
  company: "",
  image: "",
  package: "",
};

function ViewAlumni(props) {
  const [alumniInfo, setAlumniInfo] = useState(initialAlumniInfo);

  useEffect(() => {
    fetchAlumniData();
  }, []);

  const fetchAlumniData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/alumni/` + props.alumniId);
      if (response) {
        console.log(response.data);
        setAlumniInfo(response.data);
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
              <span style={{ fontWeight: "bold" }}>Full Name: </span>
              <span>{alumniInfo.name}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Batch : </span>
              <span>{alumniInfo.batch}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Company: </span>
              <span>{alumniInfo.company}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Package: </span>
              <span>{alumniInfo.package}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Image Link: </span>
              <span
                style={{
                  wordWrap: "break-word",
                  wordBreak: "break-all",
                  overflowWrap: "break-word",
                }}
              >
                {alumniInfo.image}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAlumni;
