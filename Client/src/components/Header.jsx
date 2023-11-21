import Navigation from "./Navigation"
import { NavLink } from "react-router-dom"

function Header(){
return (
<header className="bg-gray-500 flex justify-between ">
    <NavLink  to="/about"><h1 className="underline">Michael Klein</h1></NavLink>
    <Navigation />

</header>)

}
export default Header