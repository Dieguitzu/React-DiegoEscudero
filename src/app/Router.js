import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "../pages/Init"
import Layout from "./Layout"
import ItemListContainer from '../pages/ItemListConteiner'
import Distribuidora from "../pages/Distribuidora"
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../components/Cart";
import React from "react";
import CartProvider from "../context/CartContext";


const Router = () => (
    
    <BrowserRouter>
        <CartProvider>
            <Routes>  
                <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                    <Route index element={<Init/>} />
                    <Route path="Item/:id" element={<ItemDetailContainer/>} />
                    <Route path="Category/:idCategory" element={<ItemListContainer/>} />
                    <Route path="Cart" element={<Cart/>}/>
                    <Route path="Distribuidora" element={<Distribuidora/>}/>
                </Route>
                <Route path="Tienda" element={<ItemListContainer/>}/>
            </Routes>
        </CartProvider>
    </BrowserRouter>
)

export default Router;