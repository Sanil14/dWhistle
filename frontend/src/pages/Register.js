import React, { useEffect, useState } from "react";
import userService from "../services/userService";

const Register = () => {
    const [address, setAddress] = useState("SSSSS");
    const [privateKey, setPrivateKey] = useState("");

    useEffect(() => {
        Regenerate();
    }, [])

    const Regenerate = async () => {
        const resp = await userService.registerAccount();
        setAddress(resp?.address);
        setPrivateKey(resp?.key);
    }

    return (
        <>
            <h1 className="text-5xl">Register Now</h1>
            <div className="flex flex-row">
                <button className="bg-blue-500 w-1/6 my-5 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-sm h-12"
                    onClick={() => Regenerate()}>Re-Generate</button>
            </div>
            <div className="flex flex-row">
                <div className="text-gray-700 w-1/3">
                    <label className="block mb-1" htmlFor="forms-labelOverInputCode">Address</label>
                    <input readOnly className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg disabled" type="text" id="forms-labelOverInputCode" value={address} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="text-gray-700 w-1/3">
                    <label className="block mb-1" htmlFor="forms-labelOverInputCode">Private Key (REMEMBER THIS!)</label>
                    <input readOnly className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg disabled" type="text" id="forms-labelOverInputCode" value={privateKey} />
                </div>
            </div>
        </>
    )
}

export default Register;