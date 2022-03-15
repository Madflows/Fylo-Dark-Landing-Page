import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Productivity from "./components/Productivity";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Home />
      {/* <Features /> */}
      <Productivity />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
