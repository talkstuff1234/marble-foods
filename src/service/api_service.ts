/* eslint-disable no-unused-vars */
import axios from "axios"
const API_URL = "https://marble-foods-backend.vercel.app/api"

// const getToken = () => {
//   return new Promise((resolve, reject) => {
//     const userToken = localStorage.getItem("sabiAdminUser");
//     const TOKEN = userToken ? JSON.parse(userToken).token : null;
//     resolve(TOKEN);
//   });
// };

const getHeaders = async () => {
    try {
        // const token = await getToken();
        const headers = {
            //   Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
        return headers
    } catch (error) {
        console.error(`Error getting headers: ${error}`)
        throw error
    }
}

export const get = async (endpoint: string, params = {}) => {
    try {
        const headers = await getHeaders()
        const response = await axios.get(`${API_URL}/${endpoint}`, {
            params,
            headers,
        })
        return response.data
    } catch (error) {
        console.error(`GET ${API_URL}/${endpoint} failed: ${error}`)
        throw error
    }
}

export const post = async (endpoint: string, body = {}) => {
    console.log(body)
    try {
        const headers = await getHeaders()
        const response = await axios.post(`${API_URL}/${endpoint}`, body, {
            headers,
        })
        return response.data
    } catch (error) {
        console.error(`POST ${API_URL}/${endpoint} failed: ${error}`)
        throw error
    }
}

export const put = async (endpoint: string, params = {}, body = {}) => {
    try {
        const headers = await getHeaders()
        const response = await axios.put(`${API_URL}/${endpoint}`, body, {
            params,
            headers,
        })
        return response.data
    } catch (error) {
        console.error(`PUT ${API_URL}/${endpoint} failed: ${error}`)
        throw error
    }
}

export const patch = async (endpoint: string, params = {}, body = {}) => {
    try {
        const headers = await getHeaders()
        const response = await axios.patch(`${API_URL}/${endpoint}`, body, {
            params,
            headers,
        })
        return response.data
    } catch (error) {
        console.error(`PUT ${API_URL}/${endpoint} failed: ${error}`)
        throw error
    }
}

export const remove = async (endpoint: string, data = {}) => {
    try {
        const headers = await getHeaders()
        const response = await axios.delete(`${API_URL}/${endpoint}`, {
            data,
            headers,
        })
        return response.data
    } catch (error) {
        console.error(`DELETE ${API_URL}/${endpoint} failed: ${error}`)
        throw error
    }
}
