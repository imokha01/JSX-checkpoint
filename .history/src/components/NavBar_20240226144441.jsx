import { Link } from "react-router-dom"
import { MdMenu } from "react-icons/md"
import { NavLink } from "react-router-dom";
import { useState } from "react"
import { MdClose } from "react-icons/md";

const NavBar = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/country"}>Country</NavLink>
            <NavLink to={"/test"}>Test api</NavLink>
        </div>
    )
}

export default NavBar
