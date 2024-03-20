// Instance
import { api } from "./api";

export function getAllFeeds() {
    return api.get("/feeds");
}

export function getFeedById(id) {
    return api.get(`/feeds/${id}`);
}

export function createFeed(data) {
    return api.post("/feeds", data);
}

export function updateFeed(id, data) {
    return api.patch(`/feeds/${id}`, data);
}

export function deleteFeed(id) {
    return api.delete(`/feeds/${id}`);
}
