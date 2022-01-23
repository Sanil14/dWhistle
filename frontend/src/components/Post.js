import React from "react";

const Post = ({ title, content, address }) => {
    return (
        <div className="rounded bg-slate-200 px-10 py-3 my-4">
            <h3 className="text-2xl">{title}</h3>
            <p>{content}</p>
            <div className="flex flex-row items-center align-middle py-2">
                <img src={`https://source.boringavatars.com/beam`} className="rounded w-12 h-12" />
                <span className="p-2">
                    {address}
                </span>
            </div>
        </div>
    )
}

export default Post;