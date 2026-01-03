// src/components/AppRouter.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CategoriaForm from "../categorias/CategoriaForm";
import ListarCategorias from "../categorias/ListarCategorias";
import ProductoForm from "../productos/ProductoForm";
import ProtectedRoutes from "../ProtectedRoutes";
import LoginForm from "../usuarios/LoginForm";
import ListarProductos from "../productos/ListarProductos";
import ListarMovimientos from "../Movimientos/ListarMovimientos";
import MovimientoForm from "../Movimientos/MovimientoForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<LoginForm />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/categorias/nuevo" element={<CategoriaForm />} />
          <Route path="/admin/categorias/" element={<ListarCategorias />} />
          <Route path="/admin/productos/" element={<ListarProductos />} />
          <Route path="/admin/productos/nuevo" element={<ProductoForm />} />
          <Route path="/admin/productos/edit/:id" element={<ProductoForm />} />
          <Route path="/admin/movimientos/" element={<ListarMovimientos />} />
          <Route path="/admin/movimientos/:tipo" element={<MovimientoForm />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
