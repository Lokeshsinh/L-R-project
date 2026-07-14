import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

// import Hero from "../components/Home/Hero";
import ClientLogoStrip from "../components/Home/ClientLogoStrip";
import ProductCategory from "../components/Home/ProductCategory";
import AboutPreview from "../components/Home/AboutPreview";
import GlobalAuthority from "../components/Home/GlobalAuthority";
import WhyPartner from "../components/Home/WhyPartner";
import InnovationSlider from "../components/Home/InnovationSlider";
import SolarBanner from "../components/Home/SolarBanner";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import ContactCTA from "../components/Home/ContactCTA";
import HeroBanner from "../components/Home/HeroBanner";
import "../styles/Global.css";

const Home = () => {
  return (
    <>
      <Header />

      {/* <Hero /> */}
      <HeroBanner />
      <ClientLogoStrip />
      <ProductCategory />
      <AboutPreview />
      <GlobalAuthority />
      <WhyPartner />
      <InnovationSlider />
      <SolarBanner/>
      <Testimonials />
      <FAQ />
      <ContactCTA />

      <Footer />
    </>
  );
};

export default Home;