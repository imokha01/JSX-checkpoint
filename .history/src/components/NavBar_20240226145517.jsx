
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="flex gap-5 justify-between items-center ">
            <p className="text-[1.5rem] text-[#ff0000]"> IMO <span className="text-[#00ff00]">SHOP</span></p>
            <div className="flex gap-4">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/country"}>Contact</NavLink>
                <NavLink to={"/test"}>About Us</NavLink>
                <button>Sign</button>
            </div>
        </div>
    )
}

export default NavBar
