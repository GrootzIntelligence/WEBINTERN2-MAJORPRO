import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="top-0 flex bg-transparent text-white h-[10vh] w-full justify-end gap-[10vh] pr-[4.4vh] pt-[4.4vh] text-[2.5vh]">
            <NavLink className='hover:'>Home</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>About us</NavLink>
            <NavLink>Testimonials</NavLink>
            <NavLink>Contact Us</NavLink>

        </div>
    )
}

export default Navbar;