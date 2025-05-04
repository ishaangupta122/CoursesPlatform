import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import ViewTraining from "./_viewTraining";
import AddTraining from "./_addTraining";
import EditTraining from "./_editTraining";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import BASE_URL from "../Base/Base";

function Training() {
  const [trainings, setTrainingsList] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);

  useEffect(() => {
    getAllTraining();
  }, []);

  const getAllTraining = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/training`);
      if (response) {
        setTrainingsList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const actionsTemplate = (rowDate) => {
    return (
      <>
        <button
          className="btn btn-success my-1"
          onClick={() => {
            setSelectedTrainingId(rowDate._id);
            setShowViewMode(true);
          }}
        >
          <i className="pi pi-eye"></i>
        </button>
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            setSelectedTrainingId(rowDate._id);
            setShowEditMode(true);
          }}
        >
          <i className="pi pi-file-edit"></i>
        </button>
        <button
          className="btn btn-danger my-1"
          onClick={() => deleteTrainingConfirm(rowDate._id)}
        >
          <i className="pi pi-trash"></i>
        </button>
      </>
    );
  };

  const deleteTrainingConfirm = (_id) => {
    confirmDialog({
      message: "Are you sure you want to delete this training?",
      header: "Confirmation",
      icon: "pi pi-trash",
      accept: () => deleteTraining(_id),
    });
  };

  const deleteTraining = async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/training/` + _id);
      if (response) {
        getAllTraining();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const imageTemplate = (rowData) => {
    return (
      <img
        src={rowData.image}
        alt={rowData.name}
        style={{ width: "60px", height: "60px", objectFit: "cover" }}
      />
    );
  };

  return (
    <div className="users-page">
      <div className="container-fluid col-11" style={{maxWidth:"1250px"}}>
        <div className="users-list">
          <div className="addNewUser">
            <button
              className="btn btn-success"
              onClick={() => setShowAddMode(true)}
            >
              Add New Training <i className="my-2 pi pi-plus"></i>
            </button>
          </div>
          <DataTable value={trainings}>
            <Column
              field="name"
              header="Training Name"
              body={(rowData) => truncateText(rowData.name, 20)}
            ></Column>
            <Column
              field="description"
              header="Description"
              body={(rowData) => truncateText(rowData.description, 30)}
            ></Column>
            <Column
              field="price"
              header="Price"
              body={(rowData) => "₹" + rowData.price}
            ></Column>
            <Column field="type" header="Type"></Column>
            <Column header="Image" body={imageTemplate}></Column>
            <Column header="Actions" body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <Dialog
        header="View Training Data"
        visible={showViewMode}
        style={{ width: "70vw" }}
        onHide={() => setShowViewMode(false)}
      >
        <ViewTraining trainingId={selectedTrainingId} />
      </Dialog>

      <Dialog
        header="Add New Training"
        visible={showAddMode}
        style={{ width: "70vw" }}
        onHide={() => setShowAddMode(false)}
      >
        <AddTraining
          setTrainingAdded={() => {
            setShowAddMode(false);
            getAllTraining();
          }}
        />
      </Dialog>

      <Dialog
        header="Edit Training"
        visible={showEditMode}
        style={{ width: "70vw" }}
        onHide={() => setShowEditMode(false)}
      >
        <EditTraining
          trainingId={selectedTrainingId}
          setTrainingEdited={() => {
            setShowEditMode(false);
            getAllTraining();
          }}
        />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default Training;
