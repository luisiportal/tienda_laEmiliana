import type { DeviceInfo, User } from "../types/General.type.ts";
import axios from "./axios.ts";

export const verifyTokenRequest = async (token: string) => {
  return await axios.post(`verify`, token);
};

export const getDispositivosRequest = async () => {
  return await axios.get(`dispositivos`);
};

export const verifydispositivoRequest = async (visitorId: string) => {
  try {
    const response = await axios.post('/verificar-dispositivo', null, {
      headers: {
        'Content-Type': 'application/json',
        'X-Device-ID': visitorId,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al verificar el dispositivo:', error);
    throw error;
  }
};
export const autorizarDeviceRequest = async (id:number) => {
  return await axios.post('autorizar-dispositivo', {id});
};
export const deleteDeviceRequest = async (id:number) => {
  return await axios.delete(`dispositivos/${id}`);
};


export const registrarDeviceRequest = async (device: DeviceInfo) => {
  return await axios.post('registrar-dispositivo', device);
};


export const loginRequest = async (usuario: User) => {
  return await axios.post(`login`, usuario);
};

export const logOutRequest = async () => {
  return await axios.get(`logout`);
};
