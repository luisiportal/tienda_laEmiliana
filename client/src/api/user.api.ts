import type { User } from "../types/General.type";
import axios from "./axios.js";

export const createUserRequest = async (articulo: User) => {
  return await axios.post(`/usuarios`, articulo);
};

export const getUnUserRequest = async (id: number) => {
  const response =  await axios.get(`/usuarios/${id}`) 
  return response.data as User;
};
export const getAllUserRequest = async () => {
  const response = await axios.get(`/usuarios`);
  console.log(response.data);

  return response.data as User[];
};

export const updateUserRequest = async (id: number, values: User) => {
  return await axios.put(`/usuarios/edit/${id}`, values);
};

export const deleteUserRequest = async (id: number) => {
  return await axios.delete(`/usuarios/${id}`);
};
