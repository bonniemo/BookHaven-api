import { NavLink, Outlet } from "react-router-dom";
import iconHome from '../Assets/home.png';
import iconFavourites from "../Assets/book.png";
import iconSearch from "../Assets/search.png";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <h1 className="mx-2 text-3xl font-serif italic">BookHaven</h1>
        <ul className="flex gap-5 justify-end p-4">
          <li><NavLink to ="/" className="flex flex-col items-center hover:font-bold"><img src={iconHome} className="w-8"/>Home</NavLink></li>
          <li><NavLink to ="/BookCorner" className="flex flex-col items-center hover:font-bold"><img src={iconFavourites} className="w-8"/>My Book Corner</NavLink></li>
          <li><NavLink to ="/" className="flex flex-col items-center hover:font-bold"><img src={iconSearch} className="w-8"/>Search</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </>

  
  )
}

export default Nav