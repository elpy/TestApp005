import axios from 'axios'
import querystring from 'querystring'


const API_SERVER_URL = 'https://poloniex.com/'

const conf = {
    baseURL: API_SERVER_URL,
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 15000 
}

const instance = axios.create(conf)
/*
instance.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
})
  
instance.interceptors.response.use(response => {
    console.log('Response:', response)
    return response
})*/

const onError = (error) => {
    if (error.response) {
        console.log('axios onError', error.response)
    } else if (error.request) {
        console.log('axios onError', error.request)
    } else {
        console.log('axios onError', error.message)
    }
    console.log(error.config)
}

const fetchQuotations = () => instance.get('/public?command=returnTicker').catch(onError)


export default { fetchQuotations }






















