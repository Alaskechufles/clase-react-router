import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Products from "./pages/products"
import ProductsDetails from "./pages/products-details"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Login from "./pages/Login"
import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./pages/Dashboard"


function App() {


  return (
    <div >
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/products" Component={Products} /> 
            <Route path="/product-details/:id" Component={ProductsDetails}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<AuthLayout/>}>
              <Route path="/about" element={<About/>}/>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
