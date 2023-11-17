import PropTypes from "prop-types";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <section className=" py-8 flex flex-wrap gap-5 justify-center items-center">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
