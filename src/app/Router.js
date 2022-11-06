import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "../pages/Init"
import Tienda from "../pages/Tienda"
import Layout from "./Layout"

const Router = () => (
    <BrowserRouter>
        <Routes>  
            <Route element={<Layout/>}>
                <Route index element ={ <Init/>} />
                <Route path="/Tienda" element ={ <Tienda/>} />
            </Route>  
        </Routes>
    </BrowserRouter>
)

export default Router;