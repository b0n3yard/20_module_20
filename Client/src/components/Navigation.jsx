import { Route,NavLink } from "react-router-dom"
export default function Navigation(){
const changepage = ()=>{

}

return <>
<nav className="space-x-4 my-3 ">
    <NavLink to="/about">about me </NavLink>
    <NavLink to="/contact">contacts </NavLink>
    <NavLink to="/portfolio">Portfolio </NavLink>
    <NavLink to="/resume">Resume</NavLink>
</nav>

</>
}