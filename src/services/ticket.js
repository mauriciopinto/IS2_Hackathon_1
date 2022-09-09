import axios from 'axios'
import env from 'react-dotenv'

export function getTicketDataById (ticketId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_TICKET_API_URL + '/' + ticketId
    
    return axios.get (url, requestData)
}

export function getTicketsByUserId (userId) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_TICKET_API_URL + '/user/' + userId

    return axios.get (url, requestData)
}

export function getAllTickets () {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        }
    }

    let url = process.env.REACT_APP_TICKET_API_URL

    return axios.get (url, requestData)
}

export function postTicket (ticketData) {
    let requestData = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem ('token')
        },
    }

    let url = process.env.REACT_APP_TICKET_API_URL

    return axios.post (url, ticketData, requestData)
}