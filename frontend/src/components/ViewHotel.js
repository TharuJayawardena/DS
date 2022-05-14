 import * as React from "react";
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";






const ViewHotel = () => {




    const [hotels, setHotels] = useState([]);
    useEffect(() => {

        async function fetchData() {
            const result = await axios.get('http://localhost:8000/api/hotels');
            if (result.status === 200) {
                console.log(result.data);
                setHotels(result.data);
            }
        }

        fetchData();
    }, []);






    return (
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
                            <tr key={x.id}>
                                <td>{x.hotelId}</td>
                                <td>{x.name}</td>
                                <td>{x.location}</td>
                                <td>{x.description}</td>
                                <td>


                                    {/*<button onClick="location.href='./Update.js'">Update</button>*/}
                                    {/*<button className="m-2"> Update</button>*/}

                                    {/*<button onClick="window.location.href='Update.js';">*/}
                                    {/*    View more*/}
                                    {/*</button>*/}
                                    <button className="btn btn-success"> <a href="/Update" style={{ textDecoration: 'none', color: 'black' }}>Update</a></button>
                                    <button className="m-2">Delete</button>
                                    <button className="btn btn-success"> <a href="/" style={{ textDecoration: 'none', color: 'black' }}>View more</a></button>

                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>


        </div>)


}
export default ViewHotel;

