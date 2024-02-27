
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="flex gap-5 ">
            <p> Sheap <span className="">SHOP</span></p>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/country"}>Country</NavLink>
            <NavLink to={"/test"}>Test api</NavLink>
        </div>
    )
}

export default NavBar
