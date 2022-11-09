import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "../pages/Init"
import Tienda from "../pages/Tienda"
import Layout from "./Layout"
import ItemListContainer from '../components/ItemListConteiner'
import Distribuidora from "../pages/Distribuidora"

const Router = () => (
    <BrowserRouter>
        <Routes>  
            <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                <Route index element={<Init/>} />
                <Route path="Tienda" element={<Tienda/>} />
                <Route path="Tienda/:id" element={<Tienda/>} />
                <Route path="Distribuidora" element={<Distribuidora/>}/>
            </Route>
            <Route index element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;