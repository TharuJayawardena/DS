import './App.css';
import AddOrUpdateHotel from "./pages/hotel/components/AddOrUpdateHotel";
import {findAllByDisplayValue} from "@testing-library/react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Hotel} from "./pages/hotel";


//
// function App() {

const App = () => {
    return (
        <div className="container mt-5">
            <Hotel/>
        </div>
    );


}

export default App;
