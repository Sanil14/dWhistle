import axios from "./axiosWrapper";

export default {
    registerAccount: async () => {
        return await axios.GET("/user");
    }
}