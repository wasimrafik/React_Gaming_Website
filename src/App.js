import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent.jsx';
import OurShop from './components/Our Shop/OurShop.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNav from './components/NavBar/AppNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import ContactComponent from './components/ContactComponent.jsx';

function App() {
  return (
    <div className="App">
    <Router>
            <AppNav/>
                <Routes>
                   <Route path="/" element={<HomeComponent />}/>
                    <Route path="/shop" element={ <OurShop />}/>  
                     <Route path="/product" element={<ProductDetails />} />    
                      <Route path="/contact" element={<ContactComponent />} />  
                      
                </Routes>
                        <Footer/>
    </Router>
    </div>
  );
}

export default App;
