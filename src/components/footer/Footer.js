import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegHandPeace, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaCcVisa, FaCcStripe, FaCcMastercard} from 'react-icons/fa';

const Footer = () => {

    return(
        <>
            <footer className="footer pt-5 ps-3">
                <div className="container">
                    <div className="row px-0 mx-0">
                        <div className="col-md">
                            <h6 className="text-uppercase fw-bold">Help</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="link-secondary text-decoration-none" href="#">Delivery Information</a>
                                </li>
                                <li>
                                    <a className="link-secondary text-decoration-none" href="#">Returns Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h6 className="text-uppercase fw-bold">Company Information</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="link-secondary text-decoration-none" href="#">About Us</a>
                                </li>
                                <li>
                                    <a className="link-secondary text-decoration-none" href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h6 className="text-uppercase fw-bold">My Account</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/signin" className="link-secondary text-decoration-none">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="link-secondary text-decoration-none">Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h6 className="text-uppercase fw-bold">Follow Us</h6>
                            <ul className="social list-unstyled text-decoration-none d-flex flex-row">
                                <li>
                                    <a className="link-secondary text-decoration-none pe-2 fs-4" href="#"><span><FaInstagramSquare/></span></a>
                                </li>
                                <li>
                                    <a className="link-secondary text-decoration-none pe-2 fs-4" href="#"><span><FaFacebookSquare/></span></a>
                                </li>
                                <li>
                                    <a className="link-secondary text-decoration-none  pe-2 fs-4" href="#"><span><FaTwitterSquare/></span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h6 className="text-uppercase fw-bold">Pay Securely With</h6>
                            <ul className="social list-unstyled d-flex flex-row">
                                <li>
                                    <span className="text-secondary pe-2 fs-4"><FaCcStripe/></span>
                                </li>
                                <li>
                                    <span className="text-secondary pe-2 fs-4"><FaCcVisa/></span>
                                </li>
                                <li>
                                    <span className="text-secondary pe-2 fs-4"><FaCcMastercard/></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row px-0 mx-0">
                        <div className="col-12">
                            <div className="copyright border-top mt-5 pt-5">
                                <p>© 2021 | <FaRegHandPeace/>Brand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;