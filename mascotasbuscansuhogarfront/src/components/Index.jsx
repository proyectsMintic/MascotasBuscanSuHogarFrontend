import logo from "../img/logo.png";
import "../Style.css";
import Section from "./Section";

function Index() {
    return (
        <div>
            <header class="masthead bg-primary text-white text-center">
                <br />
                <div
                    class="container d-flex align-items-center flex-column"
                    margin="10px"
                >
                    <br />
                    <img
                        class="masthead-avatar mb-5"
                        src={logo}
                        alt="..."
                        margin="20px"
                    />

                    <h1 class="masthead-heading text-uppercase mb-0">
                        Ayudame a volver a casa
                    </h1>

                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                            <i classname="fas fa-dog"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                    </div>

                    <p class="masthead-subheading font-weight-light mb-0">
                        Juntos encontraremos el hogar de los peluditos
                    </p>
                </div>
            </header>
        <Section />
        </div>
    );
}

export default Index;
