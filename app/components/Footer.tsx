"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("Email submitted:", email);
		// Handle newsletter subscription
	};

	return (
		<footer className="bg-white pt-12 md:pt-16 lg:pt-20 pb-8 px-4 md:px-6">
			<div className="max-w-7xl mx-auto">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-16">
					{/* Column 1: Logo and Legal Links */}
					<div className="flex flex-col">
						<Link href="/" className="mb-8 inline-block">
							<Image
								src="/footer-logo.svg"
								alt="Encord"
								width={60}
								height={67}
							/>
						</Link>
						<div className="text-sm text-gray-500">
							<Link href="/terms" className="hover:text-gray-700">
								Term
							</Link>
							<span className="mx-1">•</span>
							<Link href="/privacy" className="hover:text-gray-700">
								Privacy Policy
							</Link>
						</div>
					</div>

					{/* Column 2: Product Links */}
					<div>
						<h3 className="font-medium text-gray-900 mb-4">Product</h3>
						<ul className="space-y-2">
							{[
								{ name: "Image", href: "/product/image" },
								{ name: "Video", href: "/product/video" },
								{ name: "DICOM", href: "/product/dicom" },
								{ name: "SAR", href: "/product/sar" },
								{ name: "Automation", href: "/product/automation" },
								{ name: "API & Python SDK", href: "/product/api-sdk" },
								{
									name: "Quality Assessment",
									href: "/product/quality-assessment",
								},
								{ name: "Encord Active", href: "/product/encord-active" },
							].map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-500 hover:text-gray-700 text-sm"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Industries Links */}
					<div>
						<h3 className="font-medium text-gray-900 mb-4">Industries</h3>
						<ul className="space-y-2">
							{[
								{
									name: "Aerospace & Defense",
									href: "/industries/aerospace-defense",
								},
								{ name: "Agriculture", href: "/industries/agriculture" },
								{
									name: "Computer Vision",
									href: "/industries/computer-vision",
								},
								{ name: "Energy", href: "/industries/energy" },
								{
									name: "Healthcare & Medical",
									href: "/industries/healthcare-medical",
								},
								{ name: "Insurance", href: "/industries/insurance" },
								{
									name: "Life Sciences & Biotech",
									href: "/industries/life-sciences-biotech",
								},
								{ name: "Logistics", href: "/industries/logistics" },
								{ name: "Manufacturing", href: "/industries/manufacturing" },
								{
									name: "Media, Gaming & Entertainment",
									href: "/industries/media-gaming",
								},
								{
									name: "Retail & E-commerce",
									href: "/industries/retail-ecommerce",
								},
								{ name: "Sports", href: "/industries/sports" },
								{
									name: "Technology & Software",
									href: "/industries/technology-software",
								},
							].map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-500 hover:text-gray-700 text-sm"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Company Links */}
					<div className="flex flex-col sm:col-span-2 lg:col-span-1">
						<div className="mb-8">
							<h3 className="font-medium text-gray-900 mb-4">Company</h3>
							<ul className="space-y-2">
								{[
									{ name: "About", href: "/about" },
									{ name: "Careers", href: "/careers" },
									{ name: "Case Studies", href: "/case-studies" },
									{ name: "Contact Us", href: "/contact" },
									{ name: "Documentation", href: "/docs" },
									{ name: "Glossary", href: "/glossary" },
									{ name: "Press", href: "/press" },
									{ name: "Pricing", href: "/pricing" },
									{ name: "Security", href: "/security" },
								].map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-gray-500 hover:text-gray-700 text-sm"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Subscribe Form */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h3 className="font-medium text-gray-900 mb-2">Subscribe</h3>
						<p className="text-gray-500 text-sm mb-4">
							Get occasional product updates and tutorials to your inbox.
						</p>
						<form onSubmit={handleSubmit} className="relative">
							<div className="flex rounded-full overflow-hidden shadow-sm">
								<input
									type="email"
									placeholder="Your work email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="flex-grow pl-6 py-3 pr-1 outline-none text-gray-500 bg-white rounded-l-full w-full"
								/>
								<button
									type="submit"
									className="bg-[#6C5CE7] text-white px-5 py-3 rounded-r-full hover:bg-[#5A4BD1] transition-colors flex items-center justify-center"
									aria-label="Subscribe"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Certifications */}
				<div className="flex flex-wrap items-center justify-between border-t border-b border-gray-200 py-6 md:py-8 mb-8">
					<div className="flex space-x-6 mb-4 md:mb-0">
						<Image
							src="/soc2-badge.png"
							alt="SOC 2 Certified"
							width={60}
							height={60}
						/>
						<Image
							src="/aicpa-badge.png"
							alt="AICPA SOC"
							width={60}
							height={60}
						/>
					</div>
					<div>
						<Image
							src="/g2-badge.png"
							alt="G2 High Performer 2023"
							width={80}
							height={80}
						/>
					</div>
				</div>

				{/* Copyright and Company Info */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					<div className="text-sm text-gray-500 md:self-end">
						© 2023 Encord. All rights reserved.
					</div>

					<div className="text-sm text-gray-500">
						<p className="font-medium mb-1">Cord Technologies Limited</p>
						<p>86-90 Paul Street, 3rd Floor</p>
						<p>London, EC2A 4NE, United Kingdom</p>
					</div>

					<div className="flex flex-col">
						<div className="text-sm text-gray-500 mb-4">
							<p className="font-medium mb-1">Cord Technologies, Inc.</p>
							<p>2261 Market St. #4217</p>
							<p>San Francisco, CA 94114, United States of America</p>
						</div>

						{/* Social Links */}
						<div className="flex space-x-4">
							<a
								href="https://twitter.com/encord"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<svg
									className="h-5 w-5 text-gray-500 hover:text-gray-700"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
							<a
								href="https://github.com/encord"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<svg
									className="h-5 w-5 text-gray-500 hover:text-gray-700"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
