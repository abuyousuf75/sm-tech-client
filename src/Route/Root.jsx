import { createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Home/Error";
import MainLayout from "../MainLayout/MainLayout";
import AddProducts from "../components/AddProducts";
import Cart from "../MyCart/Cart";
import BrandCollection from "../components/BrandCollection";
;


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children : [
        {
           path : "/",
           element: <Home></Home>,
           
        },
        {
           path : "/addProducts",
          element: <AddProducts></AddProducts>
        },
        
        {
           path : "/brand/:brand",
           element: <BrandCollection></BrandCollection>,
           loader : ({params}) => fetch(`https://localhost:5000/brand/${params.brand}`)
          
        },
        
        
        {
           path : "/myCart",
          element: <Cart></Cart>
        },
      ]
    },
  ]);

  export default router