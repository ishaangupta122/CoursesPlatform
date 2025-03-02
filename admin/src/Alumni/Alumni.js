import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import ViewAlumni from "./_viewAlumni";
import AddAlumni from "./_addAlumni";
import EditAlumni from "./_editAlumni";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import BASE_URL from "../Base/Base";

function Alumni() {
  const [alumni, setAlumniList] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedAlumniId, setSelectedAlumniId] = useState(null);

  useEffect(() => {
    getAllAlumnis();
  }, []);

  const getAllAlumnis = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/alumni`);
      if (response) {
        setAlumniList(response.data);
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
            setSelectedAlumniId(rowDate._id);
            setShowViewMode(true);
          }}
        >
          <i className="pi pi-eye"></i>
        </button>
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            setSelectedAlumniId(rowDate._id);
            setShowEditMode(true);
          }}
        >
          <i className="pi pi-file-edit"></i>
        </button>
        <button
          className="btn btn-danger my-1"
          onClick={() => deleteAlumniConfirm(rowDate._id)}
        >
          <i className="pi pi-trash"></i>
        </button>
      </>
    );
  };

  const deleteAlumniConfirm = (_id) => {
    confirmDialog({
      message: "Are you sure you want to delete this alumni?",
      header: "Confirmation",
      icon: "pi pi-trash",
      accept: () => deleteAlumni(_id),
    });
  };

  const deleteAlumni = async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/alumni/` + _id);
      if (response) {
        getAllAlumnis();
      }
    } catch (e) {
      console.log(e);
    }
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
              Add New Alumni <i className="my-2 pi pi-plus"></i>
            </button>
          </div>
          <DataTable value={alumni}>
            <Column field="name" header="Alumni Name"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="package" header="Package"></Column>
            <Column field="batch" header="Batch"></Column>
            <Column header="Image" body={imageTemplate}></Column>
            <Column header="Actions" body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <Dialog
        header="View Alumni Data"
        visible={showViewMode}
        style={{ width: "70vw" }}
        onHide={() => setShowViewMode(false)}
      >
        <ViewAlumni alumniId={selectedAlumniId} />
      </Dialog>

      <Dialog
        header="Add New Alumni"
        visible={showAddMode}
        style={{ width: "70vw" }}
        onHide={() => setShowAddMode(false)}
      >
        <AddAlumni
          setAlumniAdded={() => {
            setShowAddMode(false);
            getAllAlumnis();
          }}
        />
      </Dialog>

      <Dialog
        header="Edit Existing Alumni"
        visible={showEditMode}
        style={{ width: "70vw" }}
        onHide={() => setShowEditMode(false)}
      >
        <EditAlumni
          alumniId={selectedAlumniId}
          setAlumniEdited={() => {
            setShowEditMode(false);
            getAllAlumnis();
          }}
        />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default Alumni;
