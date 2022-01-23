import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://localhost:5000"
});

export default {
    async POST(url, data = {}) {
        try {
            const resp = await axiosAPI.post(url, data);
            return resp.data;
        } catch (e) {
            return {
                success: false
            }
        }
    },
    async GET(url, param = {}, cookie = {}) {
        try {
            const resp = await axiosAPI.get(url, {
                params: param,
                headers: {
                    cookie
                }
            });
            return resp.data;
        } catch (e) {
            return {
                success: false
            }
        }
    }
}