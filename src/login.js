import './css/forms.css';
import LoginForm from './components/loginForm';
import Footer from './components/Footer';
import Nabvar from './components/Nabvar';
import InformationLoginPage from './components/InformationLoginPage';

export function loginform() {
    return (

        <body >
            <div>
                <Nabvar />
                <div className="row container2 form-control col-12 col-md-12">
                    < InformationLoginPage />
                    < LoginForm />
                </div>
                <Footer />
            </div>
        </body >
    );
}

export default loginform;
