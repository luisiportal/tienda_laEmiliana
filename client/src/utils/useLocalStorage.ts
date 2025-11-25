import type { LocalStorage } from "../types/LocalStorage.type";

export function useLocalStorage({ key, value }: LocalStorage) {
  try {
    if (localStorage.getItem(key)) {
      const response = localStorage.getItem(key) || "";
      return JSON.parse(response);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      return value;
    }
  } catch (error) {
    console.error(error);
  }
}

export function writeLocalStorage({ key, value }: LocalStorage) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch (error) {
    console.error(error);
  }
}
export function readLocalStorage(key: string) {
  try {
    if (typeof window !== "undefined" && localStorage.getItem(key)) {
      const response = localStorage.getItem(key) || "";
      return JSON.parse(response);
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}
