import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import ViewPlacement from "./_viewPlacement";
import AddPlacement from "./_addPlacement";
import EditPlacement from "./_editPlacement";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import BASE_URL from "../Base/Base";

function Placement() {
  const [placement, setPlacementList] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedPlacementId, setSelectedPlacementId] = useState(null);

  useEffect(() => {
    getAllPlacements();
  }, []);

  const getAllPlacements = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/placements`);
      if (response) {
        setPlacementList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const actionsTemplate = (rowDate) => {
    return (
      <>
        <button
          className='btn btn-success my-1'
          onClick={() => {
            setSelectedPlacementId(rowDate._id);
            setShowViewMode(true);
          }}>
          <i className='pi pi-eye'></i>
        </button>
        <button
          className='btn btn-primary my-1'
          onClick={() => {
            setSelectedPlacementId(rowDate._id);
            setShowEditMode(true);
          }}>
          <i className='pi pi-file-edit'></i>
        </button>
        <button
          className='btn btn-danger my-1'
          onClick={() => deletePlacementConfirm(rowDate._id)}>
          <i className='pi pi-trash'></i>
        </button>
      </>
    );
  };

  const deletePlacementConfirm = (_id) => {
    confirmDialog({
      message: "Are you sure you want to delete this Placement?",
      header: "Confirmation",
      icon: "pi pi-trash",
      accept: () => deletePlacement(_id),
    });
  };

  const deletePlacement = async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/placements/` + _id);
      if (response) {
        getAllPlacements();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='users-page'>
      <div className='container-fluid col-11' style={{ maxWidth: "1250px" }}>
        <div className='users-list'>
          <div className='addNewUser'>
            <button
              className='btn btn-success'
              onClick={() => setShowAddMode(true)}>
              Add New Placement <i className='my-2 pi pi-plus'></i>
            </button>
          </div>
          <DataTable value={placement}>
            <Column field='company' header='Company'></Column>
            <Column field='stipend' header='Stipend'></Column>
            <Column header='Actions' body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <Dialog
        header='View Placement Data'
        visible={showViewMode}
        style={{ width: "70vw" }}
        onHide={() => setShowViewMode(false)}>
        <ViewPlacement placementId={selectedPlacementId} />
      </Dialog>

      <Dialog
        header='Add New Placement'
        visible={showAddMode}
        style={{ width: "70vw" }}
        onHide={() => setShowAddMode(false)}>
        <AddPlacement
          setPlacementAdded={() => {
            setShowAddMode(false);
            getAllPlacements();
          }}
        />
      </Dialog>

      <Dialog
        header='Edit Existing Placement'
        visible={showEditMode}
        style={{ width: "70vw" }}
        onHide={() => setShowEditMode(false)}>
        <EditPlacement
          placementId={selectedPlacementId}
          setPlacementEdited={() => {
            setShowEditMode(false);
            getAllPlacements();
          }}
        />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default Placement;
