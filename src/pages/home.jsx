import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Programs from "../components/programs";
import WhyLearnSection from "../components/whylearn";
import StepsGuideSection from "../components/stepsguide";
import InsightsPreview from "../components/insightspreview";
import FAQ from "../components/faq";
import Footer from "../components/footer";

// Testing AOS
// import AOSDemoPage from "../components/text";

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Programs />
        <WhyLearnSection />
        <StepsGuideSection />
        <InsightsPreview />
        <FAQ />
        <Footer />
        {/* <AOSDemoPage /> */}
        </>
    )
}

export default Home
