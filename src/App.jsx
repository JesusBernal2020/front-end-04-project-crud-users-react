import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import { BASE_URL } from "./bases/base-url";
import axios from "axios";
import { DEFAULT_VALUES } from "./bases/values";
import UserList from "./components/UserList";
import Swal from "sweetalert2";

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const changeShowModal = () => setIsShowModal(!isShowModal);

  // getall users
  const getAllUser = () => {
    const url = `${BASE_URL}/users/`;

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  //create user
  const createUser = (data, reset) => {
    const url = `${BASE_URL}/users/`;

    axios
      .post(url, data)
      .then(() => {
        getAllUser();
        resetModalForm(reset);
        Swal.fire({
          title: "Success!",
          text: "User Create Succesfully",
          icon: "success",
          confirmButtonText: "Accept",
        });
      })
      .catch((err) => console.log(err));
  };

  //eliminar usuario
  const deleteUser = (id) => {
    Swal.fire({
      title: "You're sure?",
      text: "Surely you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "##5465FF",
      cancelButtonColor: "#D85D5D",
      confirmButtonText: "Accept",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${BASE_URL}/users/${id}/`;

        axios
          .delete(url)
          .then(() => {
            getAllUser();
            Swal.fire({
              title: "User Deleted!",
              text: "User successfully deleted",
              icon: "success",
              confirmButtonText: "Accept",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  //editar usuario
  const updateUser = (data, reset) => {
    const url = `${BASE_URL}/users/${isUserToUpdate.id}/`;

    axios
      .patch(url, data)
      .then(() => {
        getAllUser();
        resetModalForm(reset);
        Swal.fire({
          title: "Update Success!",
          text: "User Update Succesfully",
          icon: "success",
          confirmButtonText: "Accept",
        });
      })
      .catch((err) => console.log(err));
  };

  //modal reset
  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
    setIsUserToUpdate(null);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <main className="font-fontText relative">
      <Header changeShowModal={changeShowModal} />
      <ModalForm
        isShowModal={isShowModal}
        changeShowModal={changeShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={resetModalForm}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />
    </main>
  );
}

export default App;
