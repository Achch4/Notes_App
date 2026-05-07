// src/services/resourceService.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api" || "http://localhost:5000/api",
});

export const getAllNotes = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getOneNote = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createNote = async (data) => {
  const response = await api.post("/", data);
  return response.data;
};

export const updateNote = async (id, data) => {
  const response = await api.put(`/${id}`, data);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};