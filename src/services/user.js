import axios from 'axios'

export function getUserDataById (userId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.USER_API_URL + '/' + userId
    
    return axios.get(url, requestData)
}

export function getAllUsersData () {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.USER_API_URL

    return axios.get(url, requestData)
}

export function postUserRegister (userData) {
    let url = process.env.REACT_APP_USER_API_URL

    return axios.post(url, userData)
}

export function userLogin (userData) {
    let url = process.env.REACT_APP_USER_API_URL + '/login'

    return axios.post(url, userData)
}