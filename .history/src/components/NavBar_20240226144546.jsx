
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/country"}>Country</NavLink>
            <NavLink to={"/test"}>Test api</NavLink>
        </div>
    )
}

export default NavBar
