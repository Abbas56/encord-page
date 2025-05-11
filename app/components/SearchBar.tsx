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
				className="flex flex-col sm:flex-row items-center w-full max-w-4xl mx-auto rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden p-1"
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
					<Button fullWidth>Book a demo</Button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
