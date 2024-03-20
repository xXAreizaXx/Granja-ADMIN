// Instance
import { api } from "./api";

export function getAllPorcines() {
    return api.get("/porcines");
}

export function getPorcineById(id) {
    return api.get(`/porcines/${id}`);
}

export function createPorcine(data) {
    return api.post("/porcines", data);
}

export function updatePorcine(id, data) {
    return api.patch(`/porcines/${id}`, data);
}

export function deletePorcine(id) {
    return api.delete(`/porcines/${id}`);
}
