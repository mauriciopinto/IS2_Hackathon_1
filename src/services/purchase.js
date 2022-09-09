import axios from 'axios'

export function getPurchaseDataById (purchaseId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PURCHASE_API_URL + '/' + purchaseId

    return axios.get(url, requestData)
}

export function getPurchasesByUserId (userId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PURCHASE_API_URL + '/user/' + userId

    return axios.get(url, requestData)
}

export function getAllPurchases () {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PURCHASE_API_URL

    return axios.get (url, requestData)
}

export function postPurchase (purchaseData) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PURCHASE_API_URL

    return axios.post (url, purchaseData, requestData)
}