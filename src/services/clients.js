// Instance
import { api } from "./api";

export function getAllClients() {
    return api.get("/clients");
}

export function getClientById(id) {
    return api.get(`/clients/${id}`);
}

export function createClient(data) {
    return api.post("/clients", data);
}

export function updateClient(id, data) {
    return api.patch(`/clients/${id}`, data);
}

export function deleteClient(id) {
    return api.delete(`/clients/${id}`);
}
