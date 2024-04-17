import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3ec39a7a-00fe-40c3-8221-e8c457ac1200'
    }
});

export const usersAPI = {
    get: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

export const followAPI = {
    post: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    delete: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
};

export const profileAPI = {
    get: (userId) => {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    putStatus: (status) => {
        return instance.put(`profile/status`, { status }).then(response => response);
    }
};

export const authAPI = {
    get: () => {
        return instance.get('auth/me').then(response => response.data);
    },
    postLogin: (email, password, rememberMe = false) => {
        return instance.post('auth/login', { email, password, rememberMe }).then(response => response.data);
    },
    deleteLogin: () => {
        return instance.delete('auth/login').then(response => response.data);
    }
};