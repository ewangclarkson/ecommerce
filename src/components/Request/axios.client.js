import axios from "axios";

const axiosApi = axios.create({
    baseURL: "https://eclarks-ecommerce.herokuapp.com/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':sessionStorage.getItem('token')
    },
});


export default axiosApi;
