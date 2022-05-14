import * as React from "react";
import ViewHotel from "./components/ViewHotel";
import AddOrUpdateHotel from "./components/AddOrUpdateHotel";
import {useRef, useState} from "react";
import {Button, Modal} from "react-bootstrap";

export const Hotel = () => {

    const childRef = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        childRef.current?.callHotelList();
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <div className="text-end">
                    <Button variant="primary" onClick={handleShow}>
                        <i className="las la-plus-circle"/> Add Hotel
                    </Button>
                </div>
                <ViewHotel ref={childRef}/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddOrUpdateHotel hideModel={handleClose}/>
                </Modal.Body>
            </Modal>
        </>

    );
};
