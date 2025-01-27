import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import axios from "axios";

const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
  
    try {
      console.log("API URL:", process.env.REACT_APP_API_BASE_URL);
      const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/getItem`)
  
      if (data.items && Array.isArray(data.items)) {
        setPosts(data.items);
      } else {
        console.log("Unexpected response structure:", data);
        setPosts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
