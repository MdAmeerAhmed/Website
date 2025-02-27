import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Component/Home";
import AboutUs from "../src/pages/About/AboutUs";
import DigitalMarketing from "../src/pages/DigitalMarket/DigitalMarketing";
import Security from "../src/pages/Security/Security";
import ITServices from "../src/pages/Services/ITServices";
import Error from "./Component/Error";
import Contact from "../src/pages/ContactUs/Contact";
import Layout from "./Component/Layout";
import OurPartner from "./pages/About/OurPartner";

function App() {
  return (
    <>  
        <Router> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about-us/our-team" element={<h1>Our Team Page</h1>} />
          <Route path="about-us/our-partners" element={<OurPartner />} />
          <Route path="about-us/clients-and-testimonials" element={<h1>Clients and Testimonials Page</h1>} />
          <Route path="about-us/faq" element={<h1>FAQ Page</h1>} />
          <Route path="it-service" element={<ITServices />} />
          <Route path="it-service/our-team" element={<h1>IT Service Team Page</h1>} />
          <Route path="it-service/our-partners" element={<h1>IT Service Partners Page</h1>} />
          <Route path="it-service/clients-and-testimonials" element={<h1>IT Service Clients and Testimonials Page</h1>} />
          <Route path="it-service/faq" element={<h1>IT Service FAQ Page</h1>} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="security" element={<Security />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
