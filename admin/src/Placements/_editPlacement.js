import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialPlacementInfo = {
  id: "",
  company: "",
  stipend: "",
};

function EditPlacement(props) {
  const [placementInfo, setPlacementInfo] = useState(initialPlacementInfo);

  useEffect(() => {
    setPlacementInfo({ ...placementInfo, id: props.placementId });
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

  const editExistingPlacement = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}/placements/` + props.placementId,
        placementInfo
      );
      if (response) {
        props.setPlacementEdited();
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
              <b>Company</b>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Company Name...'
                value={placementInfo.company}
                onChange={(e) =>
                  setPlacementInfo({
                    ...placementInfo,
                    company: e.target.value,
                  })
                }
              />
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <b>Stipend</b>
              <input
                type='string'
                className='form-control'
                placeholder='Enter Stipend Here...'
                value={placementInfo.stipend}
                onChange={(e) =>
                  setPlacementInfo({
                    ...placementInfo,
                    stipend: e.target.value,
                  })
                }
              />
            </p>
          </div>
        </div>
      </div>
      <button
        className='btn btn-success'
        onClick={() => editExistingPlacement()}>
        Edit Placement
      </button>
    </div>
  );
}

export default EditPlacement;
