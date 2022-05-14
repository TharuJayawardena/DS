import * as React from "react";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import AddOrUpdateHotel from "./AddOrUpdateHotel";


const ViewHotel = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hotels, setHotels] = useState([]);
    const [hotel, setHotel] = useState({});


    useImperativeHandle(ref, () => ({
        callHotelList() {
           fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('api/hotels');
        if (result.status === 200) {
            setHotels(result.data);
        }
    }

    const deleteHotel = async (id) => {
        const result = await axios.delete(`api/hotels?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, hotel) {
        event.preventDefault();
        setHotel(hotel);
        handleShow();
    }

    async function hideModel() {
        handleClose();
        setHotel({});
        fetchData().then();
    }

    return (
        <>
            <div className='mt-3'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hotels?.map(x => {
                            return (
                                <tr key={x._id}>
                                    <td>{x.hotelId}</td>
                                    <td>{x.name}</td>
                                    <td>{x.location}</td>
                                    <td>{x.description}</td>

                                    <td>
                                        <button className="btn btn-warning" onClick={(e) => showModal(e, x)}>
                                            <i className="las la-edit"/>
                                        </button>
                                        <button className="m-2 btn btn-danger" onClick={() => deleteHotel(x?._id)}>
                                            <i className="las la-trash"/>
                                        </button>
                                        <button className="btn btn-success"> <a href="/" style={{ textDecoration: 'none', color: 'black' }}>View more</a></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddOrUpdateHotel hotel={hotel} hideModel={hideModel}/>
                </Modal.Body>
            </Modal>
        </>

    )


});
export default ViewHotel;

