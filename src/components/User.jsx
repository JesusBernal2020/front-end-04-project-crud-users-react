import PropTypes from "prop-types";

const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  const handleClickDelete = () => {
    deleteUser(user.id);
  };

  const handleClikcUpdate = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <article className="w-72 bg-slate-50 p-4 rounded-2xl shadow-2xl">
      <h3 className="text-lg font-bold py-1">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <section className="flex flex-col gap-4  py-2">
        <div>
          <h5 className="text-sm text-subTitle">Email</h5>
          <p>{user.email}</p>
        </div>
        <div>
          <h5 className="text-sm text-subTitle">Birthday</h5>
          <p>{user.birthday || "There is no birthday"}</p>
        </div>
      </section>
      <hr />
      <div className="py-2 flex justify-end gap-2">
        <button
          onClick={handleClickDelete}
          className="bg-btnTrash hover:bg-red-500 text-white py-1 px-2 rounded-md text-xl"
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          onClick={handleClikcUpdate}
          className="bg-subTitle hover:bg-gray-400 text-white py-1 px-2 rounded-md text-xl"
        >
          <i className="bx bx-pencil"></i>
        </button>
      </div>
    </article>
  );
};

User.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  changeShowModal: PropTypes.func,
  setIsUserToUpdate: PropTypes.func,
};

export default User;
