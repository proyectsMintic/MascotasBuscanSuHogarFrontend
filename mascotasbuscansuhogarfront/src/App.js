import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Page from "./components/table/page";
import Login from "./components/Login.jsx"

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Principal" element={<Page />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
