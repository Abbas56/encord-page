import SearchBar from "./SearchBar";

export function DarkHeroBanner() {
	return (
		<section className="bg-[#130B24] py-20 md:py-28 px-4 text-center">
			<div className="max-w-2xl mx-auto">
				{/* Main Heading */}
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
					Take control of your AI data pipeline with Encord
				</h2>

				{/* Subheading */}
				<p className="text-base md:text-lg text-gray-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
					Forget fragmented workflows, annotation tools, and Notebooks for
					building AI applications. Encord's Data Development platform
					accelerates every step of taking your model into production.
				</p>

				{/* Email Form */}
				<div className="max-w-lg mx-auto">
					<SearchBar />
				</div>
			</div>
		</section>
	);
}
