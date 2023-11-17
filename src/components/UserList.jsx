import PropTypes from "prop-types";
import User from "./User";

const UserList = ({
  users,
  deleteUser,
  changeShowModal,
  setIsUserToUpdate,
}) => {
  return (
    <section className=" py-8 flex flex-wrap gap-5 justify-center items-center">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  changeShowModal: PropTypes.func,
  setIsUserToUpdate: PropTypes.func,
};

export default UserList;
