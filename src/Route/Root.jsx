import { createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Home/Error";
import MainLayout from "../MainLayout/MainLayout";
import AddProducts from "../components/AddProducts";
import Cart from "../MyCart/Cart";
import BrandCollection from "../components/BrandCollection";
import Login from "../UserMangeFrom/Login";
import Register from "../UserMangeFrom/Register";
import UpdateProducts from "../components/UpdateProducts";
import ProductsDetails from "../components/ProductsDetails";
import PrivateRoute from "./PrivateRoute";
import { FaTeethOpen } from "react-icons/fa";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children : [
        {
           path : "/",
           element: <Home></Home>,
           loader : () => fetch('https://sm-tech-backend.vercel.app/pBrands')
           
        },
        {
          path : "/products/:brand",
          element : <BrandCollection></BrandCollection>,
          loader : ({params}) => fetch(`https://sm-tech-backend.vercel.app/products/${params.brand}`)
      },
        {
          path : "/update/:id",
          element :<PrivateRoute> <UpdateProducts></UpdateProducts></PrivateRoute>,
          loader : ({params}) => fetch(`https://sm-tech-backend.vercel.app/products/${params.brand}/${params.id}`)
          
      },
        {
          path : "/details",
          element : <ProductsDetails></ProductsDetails>,
          loader : () => fetch('https://sm-tech-backend.vercel.app/products')

      },
        {
          path : "/details/:id",
          element :<PrivateRoute> <ProductsDetails></ProductsDetails></PrivateRoute>,
          loader : ({params}) => fetch(`https://sm-tech-backend.vercel.app/products/${params.id}`)

      },
        {
           path : "/addProducts",
          element:<PrivateRoute> <AddProducts></AddProducts></PrivateRoute>
        },
        
        {
           path : "/myCart",
          element: <PrivateRoute><Cart></Cart></PrivateRoute>,
          loader : () => fetch('https://sm-tech-backend.vercel.app/myCart')
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