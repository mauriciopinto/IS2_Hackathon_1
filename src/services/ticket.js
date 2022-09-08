import axios from 'axios'
import env from 'react-dotenv'

export function getTicketDataById (ticketId) {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/ticket/' + ticketId
    
    return axios.get (url, requestData)
}

export function getTicketsByUserId (userId) {
    let requestData = {
        withCredentials: true,
        params: {
            userId: userId
        }
    }

    let url = process.env.API_URL + '/ticket'

    return axios.get (url, requestData)
}

export function getAllTickets () {
    let requestData = {
        withCredentials: true
    }

    let url = process.env.API_URL + '/ticket'

    return axios.get (url, requestData)
}

export function postTicket (ticketData) {
    let url = process.env.API_URL + '/ticket'

    return axios.post (url, ticketData)
}