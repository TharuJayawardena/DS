
import './App.css';
 import AddReservation from "./components/AddReservation";
import ViewHotel from "./components/ViewHotel"
 import {BrowserRouter, Route} from "react-router-dom";



//
// function App() {

    const App = () => {
  return (
      //
      // <BrowserRouter>

      <div className="container">
     <AddReservation />
     {/*   <ViewHotel />*/}


        {/*<Route path="/addReservation" exact component={AddReservation}/>*/}
        {/*<Route path="/viewHotel" exact component={ViewHotel}/>*/}




    </div>

          // </BrowserRouter>
  );


}

export default App;
