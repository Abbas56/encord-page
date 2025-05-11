import SearchBar from "./SearchBar";

export function HeroBanner() {
	return (
		<section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 text-center">
			<div className="max-w-7xl mx-auto">
				{/* Label */}
				<div className="mb-4 sm:mb-6">
					<span className="inline-block text-[#5e44ff]  font-medium tracking-wide uppercase text-sm">
						DATA AGENTS
					</span>
				</div>

				{/* Main Heading */}
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1B4B] mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-tight">
					Automate your data pipelines
					<br className="hidden sm:block" /> with data agents
				</h1>

				{/* Subheading */}
				<p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
					Efficiently integrate humans, SOTA models, and your own models into
					data workflows to reduce the time taken to achieve high-quality data
					annotation at scale.
				</p>

				{/* Email Form */}
				<div className="max-w-lg mx-auto">
					<SearchBar />
				</div>
			</div>
		</section>
	);
}
