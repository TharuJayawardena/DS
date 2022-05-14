import * as React from "react";
import {useState} from "react";
import axios from "axios";
// import {BrowserRouter} from 'react-router-dom';

const AddReservation = () => {

    const [hotelId, setHotelId] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("'")

    function validateForm() {
        return hotelId.length > 0 && name.length > 0 && location.length > 0 && description.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post("http://localhost:8000/api/hotels", {
            hotelId: hotelId,
            name: name,
            location: location,
            description: description
        });


    }





    return (






        <div className="container d-flex justify-content-center align-items-center" style={{
            width: '1050px',
            height: '500vh',
        }}>
            <div>
                <div className='h1'>Add Hotel</div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">HotelId</label>
                        <input className="form-control"
                               type="Number"
                               value={hotelId}
                               onChange={(e) => setHotelId(e.target.value)}/><br/>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control" type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input className="form-control" type="text"
                               value={location}
                               onChange={(e) => setLocation(e.target.value)}/>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input className="form-control" type="text"
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>Submit
                    </button>


                </form>
            </div>
        </div>
    )
}

export default AddReservation;