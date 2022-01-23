import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ({ children }) => {
	const navigate = useNavigate()

	return (
		<div className="flex flex-no-wrap">
			{/* Sidebar starts */}
			<div className="w-72 absolute sm:relative bg-gray-800 shadow h-full flex-col justify-between text-white">
				<div className="px-8">
					<div className="h-32 w-full flex items-center text-4xl" onClick={() => navigate("/")}>
						dWhistle
					</div>
					<ul className="h-fit mt-12">
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center mb-6 text-slate-200">
							<div className="flex items-center">
								<span className="text-2xl ml-2" onClick={() => navigate("/")}>Home</span>
							</div>
						</li>
					</ul>
					<ul className="h-fit mt-12">
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center mb-6 text-slate-200">
							<div className="flex items-center">
								<span className="text-2xl ml-2">Register</span>
							</div>
						</li>
					</ul>
					<ul className="h-fit mt-12">
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center mb-6 text-slate-200">
							<div className="flex items-center">
								<span className="text-2xl ml-2" onClick={() => navigate("/login")}>Login</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			{/* Sidebar ends */}
			<div className="py-10 h-fit px-6">
				<div className="w-full h-fit rounded bg-slate-200 p-10 text-bl">
					{children}
				</div>
			</div>
		</div>
	);
}

export default Navbar;