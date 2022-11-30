import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "../pages/Init"
import Layout from "./Layout"
import ItemListContainer from '../pages/ItemListConteiner'
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";
import React from "react";
import CartProvider from "../context/CartContext";


const Router = () => (

    <CartProvider>    
        <BrowserRouter>
            <Routes>  
                <Route element={<Layout/>} path={process.env.PUBLIC_URL}>
                    <Route index element={<Init/>} />
                    <Route path="Item/:id" element={<ItemDetailContainer/>} />
                    <Route path="Category/:idCategory" element={<ItemListContainer/>} />
                    <Route path="Cart" element={<Cart/>}/>
                </Route>
                <Route path="Tienda" element={<ItemListContainer/>}/>
            </Routes>
        </BrowserRouter>        
    </CartProvider>
)

export default Router;