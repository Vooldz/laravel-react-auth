import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
});

axiosClient.interceptors.request.use((config) => {
    return config;
});

axiosClient.interceptors.response.use(

    (response) => {
        return response;
    },
    (error) => {
        console.log("error: ", error);
    }
);

export default axiosClient;
