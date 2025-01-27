import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const auth = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    if (auth.token) {
      dispatch(add(post));
      toast.success("Item added to Cart");
    } else {
      toast.error("Login first");
      navigate("/login")
    }
  };
  

  const removeFromCart = () => {
    if(auth.token){
      dispatch(remove(post._id));
      toast.error("Item removed from Cart");
    }else{
      toast("Login First")
      navigate("/login")
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <p className="text-gray-700 text-center font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="flex justify-center gap-1 w-40 text-gray-500 font-normal text-[12px] text-left">
          
          <p className="text-gray-700">Category: </p> {post.category}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " alt="img" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">₹{post.price}</p>
        </div>

        {cart.some((p) => p._id === post._id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
