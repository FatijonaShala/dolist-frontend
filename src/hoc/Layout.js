import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LayoutWrapper = (BaseComponent) => (props) => {
    return ( 
        <div>
        <Navbar />
        <BaseComponent />
        <Footer />
        </div>

    );
};

export default LayoutWrapper;