import { StarsCanvas } from "../canvas";
import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutUS from "../sections/AboutUS";
import CommentSection from "../sections/CommentSection";
import InfoSection from "../sections/InfoSection";
import Footer from "../Footer";
const Home = () => {
  return (
    <main className="w-full ">
      <section className=" overflow-hidden h-screen pb-[4]  flex flex-col justify-center">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </section>
      <AboutUS />
      <InfoSection />
      <CommentSection />
      <Footer />
    </main>
  );
};

export default Home;
