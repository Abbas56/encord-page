"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";

interface SearchBarProps {
	onSubmit?: (email: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (email && onSubmit) {
			onSubmit(email);
		}
	};

	return (
		<div className="p-px rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 max-w-4xl mx-auto">
			<form
				onSubmit={handleSubmit}
				className="flex items-center w-full max-w-4xl mx-auto rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden p-1"
			>
				<input
					type="email"
					placeholder="Enter your email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="flex-grow px-6 py-3 outline-none text-gray-600 w-full"
					required
				/>
				<div className="w-50">
					<Button fullWidth>
						<span className="hidden sm:inline">Book a demo</span>
						<span className="sm:hidden flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
