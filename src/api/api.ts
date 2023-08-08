import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)


    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId:string){
        return instance.get(`profile/` + userId)
    },

}

export const authAPI={
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

