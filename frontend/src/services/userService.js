import axios from "./axiosWrapper";

export default {
    registerAccount: async () => {
        return await axios.GET("/user");
    },
    submitPost: async (privateKey, content) => {
        return await axios.POST("/post", { key: privateKey, data: content });
    }
}