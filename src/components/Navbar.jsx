import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearToken } from "../redux/Slices/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const  auth  = useSelector((state) => state.auth);

  const handleLogout = () => {
    // Clear auth token
    dispatch(clearToken()); // Dispatching a logout action to reset auth in Redux state
    navigate("/"); // Redirect to the home page
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
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>

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
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
