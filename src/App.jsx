import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from './pages/Shop'
import ProductDetails from "./pages/ProductDetails";

function App() {
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDetails/>}></Route>
  </Route>
))

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
