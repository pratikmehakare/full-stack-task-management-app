import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { clearToken } from "../redux/Slices/AuthSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const { cart } = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(clearToken()); 

    if (location.pathname === "/cart") {
      window.location.href = "/"; 
    } else {
      navigate("/", { replace: true }); 
    }
    toast.success("Logout")
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" alt="img" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {auth.token ? (
            <>
              {/* Logout Button */}
              <NavLink
                onClick={handleLogout}
                className=" text-white px-4 py-2 "
              >
                Logout
              </NavLink>

              {/* Cart */}
              <NavLink to="/cart">
                <div className="relative">
                  <FaShoppingCart className="text-2xl" />
                  {cart.length > 0 && (
                    <span
                      className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                      justify-center items-center animate-bounce rounded-full text-white"
                    >
                      {cart.length}
                    </span>
                  )}
                </div>
              </NavLink>
            </>
          ) : location.pathname !== "/login" ? (
            // If the user is not on the login page
            <NavLink
              to="/login"
              className=" text-white px-4 py-2 rounded-lg"
            >
              Login
            </NavLink>
          ) : (
            // If on the login page, show Home button
            <NavLink
              to="/"
              className=" text-white px-4 py-2 "
            >
              Home
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
