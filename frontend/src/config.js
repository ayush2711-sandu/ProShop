import axios from "axios"

export const axiosInstance= axios.create({
    baseURL:"https://proshop-ayush.herokuapp.com/api/",
});