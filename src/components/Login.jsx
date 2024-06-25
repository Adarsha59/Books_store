import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserInfo = {
      email: data.email,
      password: data.password,
    };
    // Make API call to save user info
    await axios
      .post("http://localhost:3001/user/login", UserInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successfully!");
        }
        localStorage.setItem("data_save", JSON.stringify(response.data.user));
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("This is an error!");
      });
  };

  return (
    <div className="dark:bg-white dark:text-black">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box dark:bg-white dark:text-black">
          <h3 className="font-bold text-lg mb-4">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="input dark:bg-white dark:text-black input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="grow"
                  placeholder="Email"
                />
                {errors.email && <span>This field is required</span>}
              </label>

              <label className="dark:bg-white dark:text-black input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="grow"
                  placeholder="Password"
                />
                {errors.password && <span>This field is required</span>}
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
