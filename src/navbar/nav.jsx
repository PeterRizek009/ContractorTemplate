import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import { Divide as Hamburger } from "hamburger-react"

const Nav = () => {

    const [active, setActive] = useState(false);


    const showMenu = () => {
        setActive(!active)
        console.log(active);
    }

    return (
        <>
            <nav className="navbar flex h-20 items-center justify-between  bg-white mt-5">
                <Link className="navbar-brand ms-5 text-black text-xl font-mono" to={"/"}>Logo</Link>
              
                <div className="md:hidden px-2 scale-75">
                    <Hamburger color='rgba(111, 33, 0, 0.927)'  onToggle={showMenu} />
                </div>

                <ul className={active ?"absolute mx-auto top-24 bg-white w-full  md:flex justify-between items-center py-2  space-y-4": "hidden md:flex"}>
                    <li className="nav-item  after:underline-offset-4">
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
            </nav>
        </>);
}

export default Nav;