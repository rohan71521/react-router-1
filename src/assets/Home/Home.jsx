import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav></Nav>
              <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;