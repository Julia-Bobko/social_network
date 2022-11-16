import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "fb8ed0e9-a454-43dc-b4e2-340281dc3fc2" }

});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unFollow(idUser) {
        return instance.delete(`follow/` + idUser).then(response => response.data)
    },

    follow(idUser) {
        return instance.post(`follow/` + idUser).then(response => response.data)
    },

    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}
