import { createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Home/Error";
import MainLayout from "../MainLayout/MainLayout";
import AddProducts from "../components/AddProducts";
import Cart from "../MyCart/Cart";
import BrandCollection from "../components/BrandCollection";
import Login from "../UserMangeFrom/Login";
import Register from "../UserMangeFrom/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children : [
        {
           path : "/",
           element: <Home></Home>,
           loader : () => fetch('http://localhost:5000/pBrands')
           
        },
        {
          path : "/products/:brand",
          element : <BrandCollection></BrandCollection>,
          loader : ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
        {
           path : "/addProducts",
          element: <AddProducts></AddProducts>
        },
        
        {
           path : "/myCart",
          element: <Cart></Cart>
        },
        {
           path : "/login",
          element: <Login></Login>
        },
        {
           path : "/register",
          element: <Register></Register>
        },
      ]
    },
  ]);

  export default router