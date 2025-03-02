import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Base/Base';

const initialPlacementInfo = {
	company: '',
	stipend: '',
};

function AddPlacement(props) {
	const [PlacementInfo, setPlacementInfo] = useState(initialPlacementInfo);

	useEffect(() => {}, []);

	const addNewPlacement = async () => {
		try {
			const response = await axios.post(`${BASE_URL}/placements/`, PlacementInfo);
			if (response) {
				props.setPlacementAdded();
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
							<b>Company</b>
							<input
								type="String"
								className="form-control"
								placeholder="Enter Company Name..."
								value={PlacementInfo.company}
								onChange={(e) =>
									setPlacementInfo({
										...PlacementInfo,
										company: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className="col-sm-12 col-md-6">
						<p>
							<b>Stipend</b>
							<input
								type="text"
								className="form-control"
								placeholder="Enter Stipend Here..."
								value={PlacementInfo.stipend}
								onChange={(e) =>
									setPlacementInfo({
										...PlacementInfo,
										stipend: e.target.value,
									})
								}
							/>
						</p>
					</div>
				</div>
			</div>

			<button className="btn btn-success" onClick={() => addNewPlacement()}>
				Add New Placement
			</button>
		</div>
	);
}

export default AddPlacement;
