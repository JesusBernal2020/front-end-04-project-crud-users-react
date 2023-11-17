import PropTypes from "prop-types";

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <section className="relative">
      <h1 className="text-4xl text-titleText font-bold text-center pt-24 pb-10 md:text-4xl">
        List of User
      </h1>

      <button
        onClick={handleClickShowModal}
        className="absolute top-5 left-4 flex gap-2 items-center bg-inherit bg-titleText px-3 rounded-md  text-white "
      >
        <span className="text-3xl">
          <i className="bx bxs-user-plus"></i>
        </span>
        <span className="hidden sm:block">create new user</span>
      </button>
    </section>
  );
};

//TODO: TERMINAR VAMOS EN 2:13

Header.propTypes = {
  changeShowModal: PropTypes.func,
};

export default Header;
