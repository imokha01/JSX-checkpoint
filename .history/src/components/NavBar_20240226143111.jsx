import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import { MdMenu } from "react-icons/md"
import { useState } from "react"
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="flex fixed w-screen justify-between pl-1 pr-12 pt-8 items-center md:px-14 md:pt-10 text-[#ffff] barlow-condensed-extralight " >
            <div className="mx-8">
                <img src={logo} alt="" />
                <hr className="absolute top-[83px] hidden left-44 z-30 border-slate-700 pl-14 pt-10 w-[30rem]" />
            </div>
            <div className="*:flex hidden md:flex md:gap-12 tracking-widest h-screen w-[70%] bg-gray-900/10 py-8 pr-20 backdrop-blur-2xl  text-lg  border md:w-[55%] text-[20px] ">
                <Link to={"/"}>
                    <p className="flex gap-3">
                        <span className="font-bold">00 </span>
                        HOME
                    </p>
                </Link>
                <Link to={"/destination"}>
                    <p className="flex gap-3">
                        <span className="font-bold">01 </span>
                        DESTINATION
                    </p>
                </Link>
                <Link to={"/crew"}>
                    <p className="flex gap-3">
                        <span className="font-bold">02 </span>
                        CREW
                    </p>
                </Link>
                <Link to={"/technology"}>
                    <p className="flex gap-3">
                        <span className="font-bold">03 </span>
                        TECHNOLOGY
                    </p>
                </Link>
            </div>
            {   
                show === false? (
                    <MdMenu 
                    onClick={() => setShow(prev => !prev)} 
                    className="text-white text-5xl md:hidden"
                    />
                ) : (
                    <MdClose
                    onClick={() => setShow(prev => !prev)} 
                    className="text-white z-50 text-5xl absolute right-5 md:hidden"
                    />
                    
                )
            }
            {
                show && <aside className="md:hidden z-10 fixed top-0 right-0 bg-white/10 backdrop-blur-md h-screen w-[85%] *:flex *:pl-[35px] pt-[120px] *:my-[30px] text-[30px]">
                    <Link to={"/"}>
                    <p className="flex gap-5 ">
                        <span className="font-bold">00 </span>
                        HOME
                    </p>
                </Link>
                <Link to={"/destination"}>
                    <p className="flex gap-5">
                        <span className="font-bold">01 </span>
                        DESTINATION
                    </p>
                </Link>
                <Link to={"/crew"}>
                    <p className="flex gap-5">
                        <span className="font-bold">02 </span>
                        CREW
                    </p>
                </Link>
                <Link to={"/technology"}>
                    <p className="flex gap-5">
                        <span className="font-bold">03 </span>
                        TECHNOLOGY
                    </p>
                </Link>
                </aside>
                
            
            }
        </nav>

    )
}

export default NavBar
