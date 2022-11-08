
import './css/forms.css';
import FormFoundPet from './components/FormFoundPet';
import Footer from './components/Footer';
import InformationForm from './components/InformationForm';
import Nabvar from './components/Nabvar';

export function formulario() {
  return (

    <div>
      <Nabvar />
      <div className="container2 form-control">
        <InformationForm />
        <br></br>
        <FormFoundPet />
      </div>
      <Footer />
    </div>
  );
}

export default formulario;
