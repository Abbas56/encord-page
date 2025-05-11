export function NavLink({
	children,
	href,
	hasDropdown = false,
	isActive = false,
	onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={`px-3 py-2 rounded-md text-gray-700 font-medium text-base hover:bg-gray-100 flex items-center ${
				isActive ? "bg-gray-100" : ""
			}`}
		>
			{children}
			{hasDropdown && (
				<svg
					className={`ml-1 w-4 h-4 transition-transform ${
						isActive ? "rotate-180" : ""
					}`}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 6L8 10L12 6"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</button>
	);
}
