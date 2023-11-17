import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({
  isShowModal,
  // changeShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  resetModalForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;

    if (isUserToUpdate) {
      updateUser(data, reset);
    } else {
      createUser(data, reset);
    }
  };

  const handleCloseModal = () => {
    resetModalForm(reset);
  };

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`bg-bgForm w-[300px] h-[100%] fixed top-0 rounded-r-lg  transition-all md:w-[420px]  ${
        isShowModal
          ? "left-0 ease-in-out duration-700 "
          : "left-[-100%] ease-in-out duration-700"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        action=""
        className="flex flex-col items-center py-11 gap-4 relative"
      >
        <h2 className="text-white font-bold text-2xl pb-4">
          {isUserToUpdate ? "Edit User" : "Create New User"}
        </h2>
        {/*Nombre */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-subTitle font-bold text-sm md:text-lg"
              htmlFor="first_name"
            >
              Name
            </label>
            {errors.first_name && (
              <p className="text-red-600 text-xs">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 w-52 md:py-1 md:w-72 md:text-lg "
            placeholder="Enter name..."
            id="first_name"
            type="text"
            {...register("first_name", {
              required: "*This field is required",
              maxLength: {
                value: 25,
                message: "*this field only allows 25 characters",
              },
              minLength: {
                value: 1,
                message: "*this field allows a minimum of 1 character",
              },
            })}
          />
        </div>

        {/*apellidos */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-subTitle font-bold text-sm md:text-lg"
              htmlFor="last_name"
            >
              Last Name
            </label>
            {errors.last_name && (
              <p className="text-red-600 text-xs">{errors.last_name.message}</p>
            )}
          </div>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 w-52 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter last name..."
            type="text"
            id="last_name"
            {...register("last_name", {
              required: "*This field is required",
              maxLength: {
                value: 25,
                message: "*this field only allows 25 characters",
              },
              minLength: {
                value: 1,
                message: "*this field allows a minimum of 1 character",
              },
            })}
          />
        </div>
        {/*correro*/}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-subTitle font-bold text-sm md:text-lg"
              htmlFor="email"
            >
              Email adress
            </label>
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email.message}</p>
            )}
          </div>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 w-52 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter email..."
            type="email"
            id="email"
            {...register("email", {
              required: "*This field is required",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "*enter a valid email",
              },
            })}
          />
        </div>
        {/*contraseña */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              className="text-subTitle font-bold text-sm md:text-lg"
              htmlFor="password"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-600 text-xs">{errors.password.message}</p>
            )}
          </div>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white py-1 px-3 w-52 w-52 md:py-1 md:w-72 md:text-lg"
            placeholder="Enter password..."
            type="password"
            id="password"
            {...register("password", {
              required: "*This field is required",
              maxLength: {
                value: 25,
                message: "*this field only allows 25 characters",
              },
              minLength: {
                value: 1,
                message: "*this field allows a minimum of 1 character",
              },
            })}
          />
        </div>
        {/*cumpleaños */}
        <div className="flex flex-col gap-2 pb-3">
          <div className="flex items-center gap-4">
            <label
              className="text-subTitle font-bold text-sm md:text-lg"
              htmlFor="birthday"
            >
              Birthday
            </label>
            {errors.birthday && (
              <p className="text-red-600 text-xs">{errors.birthday.message}</p>
            )}
          </div>
          <input
            className="bg-bgForm text-sm border-2 outline-none rounded-md border-white text-white p-[2px] px-7 w-52 md:py-2 md:w-72 "
            placeholder="Enter birthay..."
            type="date"
            id="birthday"
            {...register("birthday")}
          />
        </div>
        <button className=" text-white hover:bg-titleText  bg-blue-400 transition-all duration-300 ease-in-out py-1 rounded-md px-9 font-bold text-center  md:w-72 md:text-lg">
          {isUserToUpdate ? "Save Changes" : "create new user"}
        </button>
        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute top-4 right-4 hover:text-titleText px-3 text-blue-400 transition-all duration-300 ease-in-out text-3xl"
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
  isUserToUpdate: PropTypes.object,
  updateUser: PropTypes.func,
  resetModalForm: PropTypes.func,
};

export default ModalForm;
