
import './css/forms.css';
import FormLostPet from './components/FormLostPet';
import Footer from './components/Footer';
import InformationFormLostPet from './components/InformationFormLostPet';
import Nabvar from './components/Nabvar';
import ComponenteBlanco from './components/ComponenteBlanco';

export function formulario() {
  return (

    <div>
      <Nabvar />
      <ComponenteBlanco />
      <div className="container2 form-control">
        <InformationFormLostPet />
        <br></br>
        <FormLostPet />
      </div>
      <ComponenteBlanco />
      <Footer />
    </div>
  );
}

export default formulario;
