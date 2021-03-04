import React from 'react'
import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const ContactUs = (props) =>{
    const coordinates = [-17.734532, 30.9545]
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                <h2>Contact Us</h2>
                    <form action="https://formspree.io/mlebqlak" method="post" className='form form-group'>
                        <label for="form-name">Name:</label>
                        <input type="text" name="name" id="form-name" className='form-control' />
                        <label for="form-name">Email:</label>
                        <input type="email" name="email" id="form-email" className='form-control' />
                        <label for="form-phone">Telephone:</label>
                        <input type="text" name="phone" id="form-phone" className='form-control' />
                        <label for="form-name">Your Message:</label>
                        <textarea name="message" id="form-message" cols="30" rows="10"
                            className="form-control"></textarea>
                        <br />
                        <input type='submit' className="btn btn-primary"></input>
                    </form>
                </div>
                <div className='col-sm-12 col-md-6'>
                <MapContainer center={coordinates} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-17.734532, 30.9545]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    </MapContainer>
                    <table className='contact-table'>
                        <tbody>
                            <tr>
                                <td><i className="fas fa-map-marker-alt  fa-2x  "></i></td>
                                <td>
                                    <h4>Address</h4>
                                    <p>642 Good Hope
                                        Westgate
                                        Harare</p>
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-at  fa-2x "></i> </td>
                                <td>
                                    <h4>Email</h4>
                                    <a href="mailto: kashirigodknows@gmail.com">
                                        kashirigodknows@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-phone fa-2x "></i></td>
                                <td>
                                    <h4>Phone</h4>
                                    <ul>
                                        <li><a href="tel:+263774676871">+263774676871</a>
                                        </li>
                                        <li><a href="tel:+263776097057">+263776097057</a>
                                        </li>

                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ContactUs