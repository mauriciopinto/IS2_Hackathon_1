import axios from 'axios'
import env from 'react-dotenv'

export function getPurchaseDataById (purchaseId) {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/purchase/' + purchaseId

    return axios.get(url, requestData)
}

export function getPurchasesByUserId (userId) {
    let requestData = {
        withCredentials: true,
        params: {
            userId: userId
        }
    }

    let url = process.env.API_URL + '/purchase'

    return axios.get(url, requestData)
}

export function getAllPurchases () {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/purchase'

    return axios.get (url, requestData)
}

export function postPurchase (purchaseData) {
    let url = process.env.API_URL + '/purchase'

    return axios.post (url, purchaseData)
}