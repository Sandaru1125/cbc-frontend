import {Link, Routes, Route } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";

export default function Adminpage() {
    return (
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="h-full w-[300px]">
         
          <Link to="/admin/users" className="p-2 flex items-center"><FaUsers className="mr-2" />Users</Link>
          <Link to="/admin/products" className="p-2 flex items-center"><FaWarehouse className="mr-2" />Products</Link>
          <Link to="/admin/orders" className="p-2 flex items-center"><FaFileInvoice className="mr-2" />Orders</Link>
           </div>

<div className="h-full bg-white  w-[calc(100vw-300px)] rounded-xl">

<Routes path="/*">
  <Route path="/users" element={<h1>userpage </h1>} />
  <Route path="/products" element={<h1>productpage </h1>} />
  <Route path="/orders" element={<h1>orderspage</h1>} />
  
  </Routes>




</div>

           </div>   
    )
}