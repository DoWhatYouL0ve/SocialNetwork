import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": '2f9a08bc-9e7c-44f4-8d09-e14f8bc25ede'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {withCredentials: true, headers: {"API-KEY":'4ecc4fdb-da6b-45f9-bb99-93bccea55cd4'}})
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {"API-KEY":'4ecc4fdb-da6b-45f9-bb99-93bccea55cd4'}
        })
    }
}

