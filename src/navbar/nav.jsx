import React, { useState } from 'react';
import "./navbar.css"
import { Divide as Hamburger } from "hamburger-react"
import { Link } from 'react-scroll'



const Nav = () => {

    const [active, setActive] = useState(false);


    const showMenu = () => {
        setActive(!active)
    }

    return (
        <>
            <nav className="navbar flex h-20 items-center justify-between bg-white mt-5">
                <Link className="navbar-brand ms-5 text-black text-xl font-mono" to={"/"} spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Logo</Link>

                <div className="md:hidden px-2 scale-75">
                    <Hamburger color='rgba(111, 33, 0, 0.927)' onToggle={showMenu} />
                </div>

                <ul className={active ? "absolute mx-auto top-24 bg-white w-full  md:flex justify-between items-center p-2  space-y-4" : "hidden md:flex"}>
                    <li className="nav-item ">
                        <Link className="nav-link active  hover:text-orange-400  p-3 cursor-pointer" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="solutions nav-link hover:text-orange-400  p-3 cursor-pointer" to="solutions"
                            spy={true}
                            smooth={true}
                            duration={800}
                            activeClass="active">Solutions</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link hover:text-orange-400  p-3 cursor-pointer" to="projects" spy={true}
                            smooth={true}
                            duration={800}
                            activeClass="active">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover:text-orange-400 cursor-pointer  p-3" to="aboutus" smooth={true}
                            duration={800}
                            activeClass="active">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover:text-orange-400 cursor-pointer  p-3" to="contactus" smooth={true}
                            duration={800}
                            activeClass="active">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </>);
}

export default Nav;