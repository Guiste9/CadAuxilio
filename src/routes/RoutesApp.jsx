import "../App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../components/Pages/Home";
import Cadastrador from "../components/Pages/Cadastrador";
import Frequências from "../components/Pages/Frequências";
import Container from '../components/Layout/Container';
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

function RoutesApp(){
    return (
    <Router>
      <Navbar/>
      <Container customClass = 'min-height'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrador" element={<Cadastrador />} />
        <Route path="/Frequências" element={<Frequências />} />
      </Routes>
      </Container> 
      <Footer/>
    </Router>   
    )
}

export default RoutesApp