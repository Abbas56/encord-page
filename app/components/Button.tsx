import Link from "next/link";

interface ButtonProps {
	children?: React.ReactNode;
	variant?: String;
	href?: string;
	fullWidth?: boolean;
	className?: string;
	[props: string]: any; // Allow any other props
}

export function Button({
	children,
	variant = "primary",
	href,
	fullWidth = false,
	className = "",
	...props
}: ButtonProps) {
	const baseClasses =
		"py-3 px-5 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

	let variantClasses = "";
	if (variant === "primary") {
		variantClasses =
			"bg-encord-purple text-white hover:bg-encord-purple-dark focus:ring-encord-purple";
	} else if (variant === "outline") {
		variantClasses =
			"border border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-gray-200";
	}

	const widthClass = fullWidth ? "w-full" : "";

	const allClasses = `${baseClasses} ${variantClasses} ${widthClass} ${className}`;

	if (href) {
		return (
			<Link href={href} className={allClasses}>
				{children}
			</Link>
		);
	}

	return (
		<button className={allClasses} {...props}>
			{children}
		</button>
	);
}
