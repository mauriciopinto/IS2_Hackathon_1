import axios from 'axios'

export function getProductDataById (productId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PRODUCT_API_URL + '/' + productId

    return axios.get (url, requestData)
}

export function getAllProducts () {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }
    let url = process.env.REACT_APP_PRODUCT_API_URL

    return axios.get (url, requestData)
}

export function postProduct (productData) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        },
        data: productData
    }

    let url = process.env.REACT_APP_PRODUCT_API_URL

    return axios.post (url, requestData)
}

export function patchProduct (productId, productData) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        },
        data: productData
    }

    let url = process.env.REACT_APP_PRODUCT_API_URL + '/' + productId

    return axios.patch (url, requestData)
}

export function deleteProduct (productId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_PRODUCT_API_URL + '/' + productId

    return axios.delete (url, requestData)
}