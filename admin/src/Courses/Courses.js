import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import ViewCourse from "./_viewCourses";
import AddCourse from "./_addCourse";
import EditCourse from "./_editCourse";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import BASE_URL from "../Base/Base";

function Courses() {
  const [courses, setCoursesList] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses`);
      if (response) {
        setCoursesList(response.data);
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
            setSelectedCourseId(rowDate._id);
            setShowViewMode(true);
          }}
        >
          <i className="pi pi-eye"></i>
        </button>
        <button
          className="btn btn-primary my-1"
          onClick={() => {
            setSelectedCourseId(rowDate._id);
            setShowEditMode(true);
          }}
        >
          <i className="pi pi-file-edit"></i>
        </button>
        <button
          className="btn btn-danger my-1"
          onClick={() => deleteCourseConfirm(rowDate._id)}
        >
          <i className="pi pi-trash"></i>
        </button>
      </>
    );
  };

  const deleteCourseConfirm = (_id) => {
    confirmDialog({
      message: "Are you sure you want to delete this course?",
      header: "Confirmation",
      icon: "pi pi-trash",
      accept: () => deleteCourse(_id),
    });
  };

  const deleteCourse = async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/courses/` + _id);
      if (response) {
        getAllCourses();
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
              Add New Course <i className="my-2 pi pi-plus"></i>
            </button>
          </div>
          <DataTable value={courses}>
            <Column
              field="name"
              header="Course Name"
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
            <Column header="Image" body={imageTemplate}></Column>
            <Column field="type" header="Type"></Column>
            <Column header="Actions" body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <Dialog
        header="View Course Data"
        visible={showViewMode}
        style={{ width: "70vw" }}
        onHide={() => setShowViewMode(false)}
      >
        <ViewCourse courseId={selectedCourseId} />
      </Dialog>

      <Dialog
        header="Add New Course"
        visible={showAddMode}
        style={{ width: "70vw" }}
        onHide={() => setShowAddMode(false)}
      >
        <AddCourse
          setCourseAdded={() => {
            setShowAddMode(false);
            getAllCourses();
          }}
        />
      </Dialog>

      <Dialog
        header="Edit Course"
        visible={showEditMode}
        style={{ width: "70vw" }}
        onHide={() => setShowEditMode(false)}
      >
        <EditCourse
          courseId={selectedCourseId}
          setCourseEdited={() => {
            setShowEditMode(false);
            getAllCourses();
          }}
        />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default Courses;
