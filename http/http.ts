import axios from 'axios'
import { baseURL } from '../store/constants/constant'

const http = axios.create({
    baseURL
})

export default http