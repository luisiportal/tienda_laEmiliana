// src/components/AppRouter.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CategoriaForm from "../categorias/CategoriaForm";
import ListarCategorias from "../categorias/ListarCategorias";
import ProductoForm from "../productos/ProductoForm";
import ProtectedRoutes from "../ProtectedRoutes";
import LoginForm from "../usuarios/LoginForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/login" element={<LoginForm />} />


 <Route element={<ProtectedRoutes />}>
         <Route path="/admin" element={<Dashboard />} />
        <Route path="/categorias/nuevo" element={<CategoriaForm />} />
        <Route path="/categorias/" element={<ListarCategorias />} />
        <Route path="/productos/" element={<ListarCategorias />} />
        <Route path="/productos/nuevo" element={<ProductoForm />} />
 
 </Route>

      </Routes>

    </BrowserRouter>
  );
}
