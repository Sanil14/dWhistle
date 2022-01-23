import axios from "./axiosWrapper";

export default {
    registerAccount: async () => {
        return await axios.GET("/user");
    },
    submitPost: async (key, title, content) => {
        return await axios.POST("/post", { key, title, content });
    },
    getPosts: async () => {
        return await axios.GET("/post");
        // return {"address": ["9ru39ei9eu", "39eu39ru3r"], "title": ["title1", "title2"], "content": ["content1", "content2"] };
    }
}