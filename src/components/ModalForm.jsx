import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const ModalForm = ({ isShowModal, changeShowModal, createUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    createUser(data, reset);
  };

  const handleCloseModal = () => {
    changeShowModal();
  };

  return (
    <section
      className={`bg-bgForm w-[300px] h-[100%] fixed top-0 rounded-r-lg  transition-all md:w-[420px]  ${
        isShowModal
          ? "left-0 ease-in-out duration-500 "
          : "left-[-100%] ease-out duration-500"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        action=""
        className="flex flex-col items-center py-11 gap-4 relative"
      >
        <h2 className="text-white font-bold text-2xl pb-4">Create New User</h2>
        {/*Nombre */}
        <div className="flex flex-col gap-2">
          <label
            className="text-subTitle font-bold text-sm md:text-lg"
            htmlFor=""
          >
            Name
          </label>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 md:py-1 md:w-72 md:text-lg "
            placeholder="Enter name..."
            type="text"
            {...register("first_name")}
          />
        </div>
        {/*apellidos */}
        <div className="flex flex-col gap-2">
          <label
            className="text-subTitle font-bold text-sm md:text-lg"
            htmlFor=""
          >
            Last Name
          </label>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter last name..."
            type="text"
            {...register("last_name")}
          />
        </div>
        {/*correro*/}
        <div className="flex flex-col gap-2">
          <label
            className="text-subTitle font-bold text-sm md:text-lg"
            htmlFor=""
          >
            Email adress
          </label>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter email..."
            type="email"
            {...register("email")}
          />
        </div>
        {/*contraseña */}
        <div className="flex flex-col gap-2">
          <label
            className="text-subTitle font-bold text-sm md:text-lg"
            htmlFor=""
          >
            Password
          </label>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter password..."
            type="password"
            {...register("password")}
          />
        </div>
        {/*cumpleaños */}
        <div className="flex flex-col gap-2 pb-3">
          <label
            className="text-subTitle font-bold text-sm md:text-lg"
            htmlFor=""
          >
            Birthday
          </label>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white p-[2px] px-7 md:py-2 md:w-72 "
            placeholder="Enter birthay..."
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className=" text-white bg-titleText py-1 rounded-md px-9 font-bold text-center  md:w-72 md:text-lg">
          create new user
        </button>
        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute top-4 right-4 text-titleText text-3xl"
        >
          <i className="bx bxs-left-arrow-circle"></i>
        </button>
      </form>
    </section>
  );
};

ModalForm.propTypes = {
  isShowModal: PropTypes.bool,
  changeShowModal: PropTypes.func,
  createUser: PropTypes.func,
};

export default ModalForm;
