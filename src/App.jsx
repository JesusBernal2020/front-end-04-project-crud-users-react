import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import { BASE_URL } from "./bases/base-url";
import axios from "axios";
import { DEFAULT_VALUES } from "./bases/values";
import UserList from "./components/UserList";

function App() {
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
      })
      .catch((err) => console.log(err));
  };

  //modal reset
  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
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
      />
      <UserList users={users} />
    </main>
  );
}

export default App;
