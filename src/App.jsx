import About from "./components/About";
import Contact from "./components/Contact";
import FAQs from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Testimonial />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
