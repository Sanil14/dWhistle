import React, { useState } from "react";

const Login = () => {
    const [textValue, setTextValue] = useState("");
    const [loginType, setLoginType] = useState("");

    const onSubmit = async () => {
        if (!textValue || textValue.length < 1) return alert(`Enter Valid ${loginType === "key" ? "Private Key" : "Mnemonic"}`)
        if (loginType === "key") {
            // const account = await ethereum.import_account({
            //     private_key: textValue
            // });
            // console.log(account);
        } else if (loginType === "mnemonics") {
            // const account = await ethereum.import_account({
            //     mnemonics: textValue
            // });
            // console.log(account);
        }
    }

    return (
        <>
            <h1 className="text-5xl">Login Using:</h1>
            <div className="flex flex-row">
                <button class="bg-blue-500 w-1/4 mx-10 my-5 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-sm h-12"
                    onClick={() => setLoginType("key")}>Use Private Key</button>
            </div>
            <div className="flex flex-row">
                <button class="bg-blue-500 w-1/4 mx-10 my-2 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-sm h-12"
                    onClick={() => setLoginType("mnemonics")}>Use Mnemonics</button>
            </div>
            {loginType === "key" && (
                <input placeholder="Enter Private Key..." className="h-20 text-xl rounded px-2 m-10 w-1/4" />
            )}
            {loginType === "mnemonics" && (
                <input placeholder="Enter Mnemonics" className="h-20 text-xl rounded px-2 m-10 w-1/4" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
            )}
            {(loginType === "key" || loginType === "mnemonics") && (
                <div className="flex flex-row">
                    <button class="bg-blue-500 w-1/6 mx-10 my-2 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-sm h-12"
                        onClick={async () => await onSubmit()}>Submit</button>
                </div>
            )}
        </>
    )
}

export default Login;