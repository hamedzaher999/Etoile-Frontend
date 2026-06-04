import Footer from "./sections/Footer";
import AboutUS from "./sections/AboutUS";
import InfoSection from "./sections/InfoSection";
import ReviewSection from "./sections/ReviewSection";
import Hero from "./sections/Hero";
import Navbar from "./Navbar";
import { useHomeStore } from "../../../store/home.store";
import { useEffect } from "react";
import { useSceneStore } from "../../../store/scene.store";
import LoadingScreen from "../../shared/LoadingPage";

const Home = () => {
  const isPageLoaded = useHomeStore((s) => s.isPageLoaded);
  const setScene = useSceneStore((s) => s.setScene);
  useEffect(() => {
    setScene("homePage");
  }, []);
  return (
    <div className="pointer-events-none relative z-[1000]">
      {!isPageLoaded && <LoadingScreen />}
      <Navbar />
      <Hero />
      <AboutUS />
      <InfoSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
