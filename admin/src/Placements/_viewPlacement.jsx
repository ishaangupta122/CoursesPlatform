import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialPlacementInfo = {
  company: "",
  stipend: "",
};

function ViewPlacement(props) {
  const [placementInfo, setPlacementInfo] = useState(initialPlacementInfo);

  useEffect(() => {
    fetchPlacementData();
  }, []);

  const fetchPlacementData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/placements/` + props.placementId
      );
      if (response) {
        setPlacementInfo(response.data);
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
              <span style={{ fontWeight: "bold" }}>Company: </span>
              <span>{placementInfo.company}</span>
            </p>
          </div>
          <div className='col-12'>
            <p>
              <span style={{ fontWeight: "bold" }}>Stipend: </span>
              <span>{placementInfo.stipend}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPlacement;
