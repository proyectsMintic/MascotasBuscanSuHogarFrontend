import "./App.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
    return (
        <div>
          <div>
            <Navbar /> 
          </div>
          <div>
            <Header />
          </div>
          <div>
            <Section />
          </div>
          <div>
          <Footer />
          </div>
            
        </div>
    );
}

export default App;
