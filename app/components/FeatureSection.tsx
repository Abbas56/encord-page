"use client";

import Image from "next/image";

export function FeatureSection() {
	return (
		<section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
			{/* Main Heading */}
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1B4B] mb-6">
				Fast-track AI development with better data
			</h2>

			{/* Main Description */}
			<p className="text-gray-600 text-lg mb-12 max-w-4xl">
				Use Encord Data Agents to securely and seamlessly integrate with AI
				models like Claude-3.7, GPT-4o, o3 and more directly into your data
				workflow to automate any data task at speed. Customize your workflow to
				combine AI and HITL to 10x your data throughput while ensuring label
				accuracy at scale.
			</p>

			{/* Two-column feature grid */}
			<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
				{/* Feature 1 */}
				<div className="flex flex-col">
					{/* Feature 1 Image */}
					<div className="relative aspect-[16/10] w-full mb-6 rounded-lg overflow-hidden bg-purple-900">
						<Image
							src="/fast-track.jpg"
							alt="Data Agent workflow diagram showing AI model integration"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>

					{/* Feature 1 Heading */}
					<h3 className="text-xl md:text-2xl font-bold text-[#1E1B4B] mb-3">
						Integrate the right AI model to automate data workflows
					</h3>

					{/* Feature 1 Description */}
					<p className="text-gray-600">
						Flexibly integrate your own model or SOTA foundation models to
						enable accurate data preparation, fast. Automate any data action
						such as pre-labeling, routing by reasoning, evaluation and more.
					</p>
				</div>

				{/* Feature 2 */}
				<div className="flex flex-col">
					{/* Feature 2 Image */}
					<div className="relative aspect-[16/10] w-full mb-6 rounded-lg overflow-hidden bg-purple-900">
						<Image
							src="/scale-data.jpg"
							alt="Language routing interface showing multilingual data pipeline"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>

					{/* Feature 2 Heading */}
					<h3 className="text-xl md:text-2xl font-bold text-[#1E1B4B] mb-3">
						Scale data pipelines without scaling headcount
					</h3>

					{/* Feature 2 Description */}
					<p className="text-gray-600">
						Orchestrate bulk data labeling with AI to future-proof your data
						workflows to effectively handle large data volumes. Integrate HITL
						QA to maintain data quality and label accuracy.
					</p>
				</div>
			</div>
		</section>
	);
}
