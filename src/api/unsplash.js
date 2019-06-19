import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID b4ac1cdc478b1e97457d1973c67883ab840c23dc425a2f7018cb3adc280000fd'
    }
})