import React, { useEffect, useState } from "react";
import userService from "../services/userService";

const Home = () => {
    const [submitHidden, setSubmitHidden] = useState(true);
    const [privateKey, setPrivateKey] = useState("");
    const [content, setContent] = useState("");
    const submitPost = React.createRef();

    const onSubmit = async () => {
        if (!privateKey || privateKey.length < 1) return alert("Invalid Private Key!");
        if (content.length < 1) return alert("Invalid Post Content!");
        const resp = await userService.submitPost(privateKey, content);
        if (resp.success === true) return alert("Submitted Content")
        if (resp.success === false) return alert("Failed Submitting! Try again...")
    }

    useEffect(() => {
        submitHidden ? submitPost.current.style.display = "none" : submitPost.current.style.display = "";
    }, [submitHidden])


    return (
        <>
        <div className="flex flex-row align-middle cursor-pointer" onClick={() => setSubmitHidden(!submitHidden)}>
            <span className="text-4xl w-fit">Click to submit an anonymous post</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
            <div ref={submitPost}>
                <div className="flex flex-row">
                    <div className="text-gray-700 w-1/3">
                        <label className="block mb-1" htmlFor="forms-labelOverInputCode">Private Key</label>
                        <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg disabled" type="text"
                            id="forms-labelOverInputCode" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="text-gray-700 w-1/3">
                        <label className="block mb-1" htmlFor="forms-labelOverInputCode">Post Content</label>
                        <textarea className="w-full h-40 p-3 text-base placeholder-gray-600 border rounded-lg disabled" type="text"
                            id="forms-labelOverInputCode" value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <button className="bg-blue-500 w-1/6 my-5 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-sm h-12"
                        onClick={() => onSubmit()}>Submit Post</button>
                </div>
            </div>
        </>
    )
}

export default Home;