"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { NavLink } from "./NavLink";

const navItems = [
	{
		label: "Product",
		hasDropdown: true,
		link: "#",
	},
	{
		label: "Pricing",
		hasDropdown: false,
		link: "/pricing",
	},
	{
		label: "Case Studies",
		hasDropdown: false,
		link: "/case-studies",
	},
	{
		label: "Resources",
		hasDropdown: true,
		link: "#",
	},
	{
		label: "Company",
		hasDropdown: true,
		link: "#",
	},
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleDropdown = (label: any) => {
		setActiveDropdown(activeDropdown === label ? null : label);
	};

	return (
		<header className="py-5 px-4 md:px-6">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image src="/encord-logo.svg" alt="Encord" width={180} height={40} />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-1">
					{navItems.map((item) => (
						<div key={item.label} className="relative">
							<NavLink
								href={item.link}
								hasDropdown={item.hasDropdown}
								isActive={activeDropdown === item.label}
								onClick={() =>
									item.hasDropdown ? toggleDropdown(item.label) : null
								}
							>
								{item.label}
							</NavLink>

							{/* Dropdown would be implemented here */}
						</div>
					))}
				</nav>

				{/* CTA Buttons */}
				<div className="hidden md:flex items-center space-x-3">
					<Button variant="outline" href="/login">
						Log in
					</Button>
					<Button href="/demo">Book a demo</Button>
				</div>

				{/* Mobile menu button */}
				<button
					className="md:hidden p-2"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{mobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4">
					<div className="flex flex-col space-y-4">
						{navItems.map((item) => (
							<div key={item.label}>
								<button
									onClick={() =>
										item.hasDropdown ? toggleDropdown(item.label) : null
									}
									className="w-full text-left py-2 text-lg font-medium flex items-center justify-between"
								>
									{item.label}
									{item.hasDropdown && (
										<svg
											className={`w-5 h-5 transition-transform ${
												activeDropdown === item.label ? "rotate-180" : ""
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

								{/* Mobile dropdown would be implemented here */}
							</div>
						))}

						<div className="pt-4 space-y-3">
							<Button variant="outline" href="/login" fullWidth>
								Log in
							</Button>
							<Button href="/demo" fullWidth>
								Book a demo
							</Button>
						</div>
					</div>

					{/* Close button */}
					<button
						className="absolute top-5 right-5 p-2"
						onClick={() => setMobileMenuOpen(false)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			)}
		</header>
	);
}
