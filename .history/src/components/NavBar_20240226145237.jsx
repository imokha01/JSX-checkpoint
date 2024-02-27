
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="flex gap-5 justify-between  ">
            <p className="text-[1.5rem] text-[#ff0000]"> IMO <span className="text-[#00ff00]">SHOP</span></p>
            
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/country"}>Country</NavLink>
            <NavLink to={"/test"}>Test api</NavLink>
        </div>
    )
}

export default NavBar
