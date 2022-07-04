import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        'API-KEY':'5a58cbe0-348b-4ed0-957f-424447631a99'
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
    getUserProfile (userId:number){
        return instance.get(`profile/${userId}`)
            .then(response=>response.data)
    },
    getUserStatus (userId:number) {
        return instance.get(`profile/status/${userId}`)
            .then(response=>response.data)
    },
    updateStatus (status:string) {
        return instance.put(`profile/status/`,{status})
            .then(response=>response.data)
    }
}

export const authAPI = {
    getLogin() {
        return instance.get('auth/me')
            .then(response=>response.data)
    }
}
