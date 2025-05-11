"use client";

import { useState } from "react";
import Image from "next/image";

// Feature data
const features = [
	{
		id: "video-captioning",
		icon: (
			<Image src={"/paperclip.svg"} alt="paperclip" width={24} height={24} />
		),
		title: "Video Captioning",
		description:
			"Customize annotation layouts to enable any multimodal data labeling workflow. Leverage multimodal context to achieve high-quality data annotation at scale.",
		imageSrc: "/carouselimage1.jpg",
	},
	{
		id: "object-segmentation",
		icon: <Image src={"/split.svg"} alt="paperclip" width={24} height={24} />,
		title: "Object Segmentation & Tracking",
		description:
			"Customize annotation layouts to enable any multimodal data labeling workflow. Leverage multimodal context to achieve high-quality data annotation at scale.",
		imageSrc: "/carouselimage2.jpg",
	},
	{
		id: "audio-transcription",
		icon: (
			<Image src={"/fileplus.svg"} alt="paperclip" width={24} height={24} />
		),
		title: "Audio Transcription & Speaker Diarization",
		description:
			"Customize annotation layouts to enable any multimodal data labeling workflow. Leverage multimodal context to achieve high-quality data annotation at scale.",
		imageSrc: "/carouselimage3.jpg",
	},
];

export function Carousel() {
	const [activeFeature, setActiveFeature] = useState(features[0].id);

	return (
		<section className="py-16 md:py-24 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Label */}
				<div className="mb-4">
					<span className="inline-block bg-purple-100 text-purple-800 font-medium px-3 py-1 rounded-full text-sm">
						MODALITIES
					</span>
				</div>

				{/* Main Heading */}
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mb-12">
					Save 1000s of hours, automate any data pipeline stage with Data Agents
				</h2>

				{/* Feature Carousel */}
				<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Column - Feature List */}
					<div className="space-y-8 border-t border-gray-200">
						{features.map((feature) => (
							<div
								key={feature.id}
								className={`pt-8 cursor-pointer transition-all duration-300 hover:translate-x-1 ${
									activeFeature === feature.id
										? "opacity-100"
										: "opacity-70 hover:opacity-90"
								}`}
								onClick={() => setActiveFeature(feature.id)}
							>
								<div className="flex items-start">
									<div
										className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
											activeFeature === feature.id
												? "text-purple-600"
												: "text-gray-500"
										}`}
									>
										{feature.icon}
									</div>
									<div className="ml-4">
										<h3
											className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
												activeFeature === feature.id
													? "text-[#1E1B4B]"
													: "text-gray-700"
											}`}
										>
											{feature.title}
										</h3>
										<p className="text-gray-600">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Right Column - Feature Image */}
					<div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
						{/* Image containers with CSS transitions */}
						{features.map((feature) => (
							<div
								key={feature.id}
								className={`absolute inset-0 transition-opacity duration-500 ${
									activeFeature === feature.id ? "opacity-100" : "opacity-0"
								}`}
							>
								{feature.imageSrc && (
									<Image
										src={feature.imageSrc}
										alt={feature.title}
										fill
										className="object-cover"
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
