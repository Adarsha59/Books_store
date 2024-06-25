import React from "react";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";
function Logout() {
  const [isAuthenticated, setIsAuthenticated] = useAuth();
  const logout = () => {
    try {
      setIsAuthenticated({
        ...isAuthenticated,
        user: null,
      });
      localStorage.removeItem("data_save");
      toast.success("Logged Out Successfully!");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("This is an error!");
    }
  };
  return (
    <>
      <div className="mx-4 flex flex-nowrap ">
        <div className="mx-3">
          <button onClick={logout} className="btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout;
