import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
});

axiosClient.interceptors.request.use((config) => {
    console.log("config: ", config);
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(

    (response) => {
        console.log("response: ", response);
        return response;
    },
    (error) => {
        console.log("error: ", error);
        return Promise.reject(error);
    }
);

export default axiosClient;
