import axios from 'axios'
import env from 'react-dotenv'

export function getUserDataById (userId) {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/user/' + userId
    
    return axios.get(url, requestData)
}

export function getAllUsersData () {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/user'
    return axios.get(url, requestData)
}

export function postUserRegister (userData) {
    let url = process.env.API_URL + '/user'

    return axios.post(url, userData)
}

export function userLogin (userData) {
    let url = process.env.API_URL + '/login'

    return axios.post(url, userData)
}