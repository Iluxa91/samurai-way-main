import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        'API-KEY':'62cafd95-3000-413a-81e3-557c6f0ebf36'
    },

})

export const usersAPI = {
    getUsers (currentPage:number,pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    unFollow(id:number) {
        return instance.delete(`follow/${id}`)
            .then(response=>response.data)
    },
    follow(id:number) {
        return instance.post(`follow/${id}`)
            .then(response=>response.data)
    }
}

export const profileAPI = {
    getUserProfile (userId:string){
        return instance.get(`profile/` + userId)
            .then(response=>response.data)
    }
}

export const authAPI = {
    getLogin() {
        return instance.get('auth/me')
            .then(response=>response.data)
    }
}
