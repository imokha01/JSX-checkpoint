
import { NavLink } from "react-router-dom";
import { useState } from "react"
import { MdClose } from "react-icons/md";

const NavBar = () => {
    
    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/country"}>Country</NavLink>
            <NavLink to={"/test"}>Test api</NavLink>
        </div>
    )
}

export default NavBar
