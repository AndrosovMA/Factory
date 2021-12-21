/** Main components*/
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

/** Navigation components*/
import About from "./components/about/About";
import Security from "./components/security/Security";
import Production from "./components/production/Production";
import Client from "./components/client/Client";
import Payment from "./components/payment/Payment";
import Contacts from "./components/contacts/Contacts";
import Cart from "./components/cart/Cart";
import CartChange from "./components/cart/CartChange";
import Registration from "./components/registration/Registration";
import Entrance from "./components/entrance/Entrance";
import ContactInformationUser from "./components/contactInformationUser/СontactInformationUser";

/** React*/
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App(store) {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="/security" element={<Security/>} />
                <Route  path="/production" element={<Production/>} />
                <Route  path="/client" element={<Client/>} />
                <Route  path="/payment" element={<Payment/>} />
                <Route  path="/contacts" element={<Contacts/>} />
                <Route  path="/cart" element={<Cart/>} />
                <Route  path="/cartchange" element={<CartChange/>} />
                <Route  path="/registration" element={<Registration/>} />
                <Route  path="/contactInformation" element={<ContactInformationUser/>} />
                <Route  path="/entrance" element={<Entrance/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
