import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SignsList from "./components/signs/SignsList";
import MethodList from "./components/method/MethodList";
import Process from "./components/process/Process";
import About from "./components/about/About";
import Review from "./components/review/Review";
import Footer from "./components/footer/Footer";
import BackToTopBtn from "./components/button/BackToTopBtn";
import SpeedDial from "./components/button/SpeedDial";

import methods from "./data/methodData";
import symptoms from "./data/symptomData";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SignsList symptoms={symptoms} />
      <MethodList methods={methods} />
      <Process />
      <About />
      <Review />
      <Footer />
      <BackToTopBtn />
      <SpeedDial />
    </div>
  );
}

export default App;
