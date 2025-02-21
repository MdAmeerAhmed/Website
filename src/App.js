import './App.css';
import Carousel from './Component/Carousel';
import Footer from './Component/Footer';
import Navbar from './Component/NavBar';
import TopBar from './Component/TopBar';
import NewLetter from './Component/NewLetter';
import ContactUs from './Component/ContactUs';
import WhoAre from './Component/WhoAre';

function App() {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Carousel/>
    <WhoAre/>
    <ContactUs/>
    <NewLetter/>
    <Footer/>
    </>
  );
}

export default App;
