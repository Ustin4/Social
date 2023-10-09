import axios from "axios";
import {LoginParamsType} from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
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

    getProfile(userId: number) {

        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const profileAPI = {
    getFriends(friendsFlag: boolean,pageSize?:number) {
        return instance.get(`users?friend=${friendsFlag}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: number) {
        console.log(userId, 'userid')
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
    }


}


export const authAPI = {

    authLogOut() {
        return instance.delete('auth/login')
    },
    authLogin(data: LoginParamsType) {
        return instance.post<ResponseType<{ userId: number }>>('auth/login', data);
    },
    authMe() {
        return instance.get<ResponseType<{ id: number; email: string; login: string }>>(`auth/me`)

    }
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

