import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useUserStore = defineStore('user', () => {
   
    const user = reactive({
        id: '',
        token: '',
        name: ''
    })

    const logout = () => {
        user.token = ''
        user.id = ''
        user.name = ''
    }

    const setUser = (data) => {
        user.token = data.token
        user.id = data.id
        user.name = data.name
    }

    return { user, logout, setUser }
},
{ persist: true },
)