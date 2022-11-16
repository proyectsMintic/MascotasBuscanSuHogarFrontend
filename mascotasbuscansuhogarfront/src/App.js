import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Page from "./components/table/page";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import Principal from "./components/Principal";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <Navbar logged={true}/>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Index" element={<Principal />} />
                    <Route path="Login/Registrarse" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
