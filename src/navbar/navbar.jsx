import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Logo</Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Logo</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Contact us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">About us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;