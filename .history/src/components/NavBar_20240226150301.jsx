
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="flex gap-5 justify-between items-center ">
            <p className="text-[1.5rem] text-[#ff0000]"> IMO <span className="text-[#00ff00]">SHOP</span></p>
            <div className="flex gap-6 justify-center items-center">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/about"}>About Us</NavLink>
                <button className="bg-[blue] px-3 py-3 rounded-3xl">Sign Up</button>
                <button className="bg-[blue] px-3 py-3 rounded-3xl">Log In</button>
            </div>
        </div>
    )
}

export default NavBar
