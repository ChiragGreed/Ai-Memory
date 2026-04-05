import Navbar from "../Components/Navbar/Navbar.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Features from "../Components/Features/Features.jsx";
import Install from "../Components/InstallGuide/Install.jsx";
import AuthCTA from "../Components/AuthCTA/AuthCTA.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./LandingPage.scss";

export default function LandingPage() {

  return (

    <div className="vexa">

      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <Navbar />

      <Hero />

      <div className="section-divider" />

      <Features />

      <div className="section-divider" />

      <Install />

      <div className="section-divider" />

      <AuthCTA />

      <Footer />

    </div>

  );

}