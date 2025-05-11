import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { FeatureSection } from "./components/FeatureSection";
import { DarkHeroBanner } from "./components/DarkHeroBanner";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";

export default function App() {
	return (
		<>
			<Head>
				<title>Encord Landing Page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				theme={{
					fontFamily: "Inter, sans-serif",
					components: {
						Button: {
							styles: {
								root: {
									fontWeight: 500,
								},
							},
						},
					},
				}}
			>
				<Navbar />
				<HeroBanner />
				<FeatureSection />
				<Carousel />
				<DarkHeroBanner />
				<Footer />
			</MantineProvider>
		</>
	);
}
