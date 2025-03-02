import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import ViewUser from "./_viewUser";
import AddUser from "./_addUser";
import EditUser from "./_editUser";
import { ConfirmDialog } from "primereact/confirmdialog";
import BASE_URL from "../Base/Base";

function User() {
  const [users, setUsersList] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      if (response) {
        setUsersList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const coursesTemplate = (rowData) => {
    if (rowData.courses && rowData.courses.length > 0) {
      return (
        <ul>
          {rowData.courses.map((course, index) => (
            <li key={index}>{course.name}</li>
          ))}
        </ul>
      );
    }
    return <span>No courses</span>;
  };

  const actionsTemplate = (rowData) => {
    return (
      <>
        <button
          className='btn btn-success my-1'
          onClick={() => {
            setSelectedUserId(rowData._id);
            setShowViewMode(true);
          }}>
          <i className='pi pi-eye'></i>
        </button>
      </>
    );
  };

  // const deleteUserConfirm = (_id) => {
  //   confirmDialog({
  //     message: "Are you sure you want to delete this user?",
  //     header: "Confirmation",
  //     icon: "pi pi-trash",
  //     accept: () => deleteUser(_id),
  //   });
  // };

  // const deleteUser = async (_id) => {
  //   try {
  //     const response = await axios.delete(`${BASE_URL}/users/` + _id);
  //     if (response) {
  //       getAllUsers();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const truncateText = (text, maxLength) => {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + "...";
  //   }
  //   return text;
  // };

  // const imageTemplate = (rowData) => {
  //   return (
  //     <img
  //       src={rowData.image}
  //       alt={rowData.name}
  //       style={{ width: "60px", height: "60px", objectFit: "cover" }}
  //     />
  //   );
  // };

  return (
    <div className='users-page'>
      <div className='container-fluid col-11' style={{ maxWidth: "1250px" }}>
        <div className='users-list'>
          <div className='addNewUser'>
            {/* <button className='btn btn-success' onClick={() => setShowAddMode(true)}>
                            Add New Training <i className='my-2 pi pi-plus'></i>
                        </button> */}
          </div>
          <DataTable value={users}>
            <Column field='name' header='Name'></Column>
            <Column field='email' header='Email'></Column>
            <Column header='Purchased Courses' body={coursesTemplate}></Column>
            <Column header='Actions' body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <Dialog
        header='View User Data'
        visible={showViewMode}
        style={{ width: "70vw" }}
        onHide={() => setShowViewMode(false)}>
        <ViewUser userId={selectedUserId} />
      </Dialog>

      <Dialog
        header='Add New User'
        visible={showAddMode}
        style={{ width: "70vw" }}
        onHide={() => setShowAddMode(false)}>
        <AddUser
          setUserAdded={() => {
            setShowAddMode(false);
            getAllUsers();
          }}
        />
      </Dialog>

      <Dialog
        header='Edit User'
        visible={showEditMode}
        style={{ width: "70vw" }}
        onHide={() => setShowEditMode(false)}>
        <EditUser
          userId={selectedUserId}
          setUserEdited={() => {
            setShowEditMode(false);
            getAllUsers();
          }}
        />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default User;
