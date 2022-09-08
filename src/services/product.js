import axios from 'axios'
import env from 'react-dotenv'

export function getProductDataById (productId) {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/product/' + productId

    return axios.get (url, requestData)
}

export function getAllProducts () {
    let requestData = {
        withCredentials: true
    }
    
    let url = process.env.API_URL + '/product'

    return axios.get (url, requestData)
}

export function postProduct (productData) {
    let url = process.env.API_URL + '/product'

    return axios.post (url, productData)
}

export function updateProduct (productId, productData) {
    let url = process.env.API_URL + '/product/' + productId

    return axios.patch (url, productData)
}

export function deleteProduct (productId) {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/product/' + productId

    return axios.delete (url, requestData)
}