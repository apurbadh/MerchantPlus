import axios from "axios";

export default function () {

    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
}