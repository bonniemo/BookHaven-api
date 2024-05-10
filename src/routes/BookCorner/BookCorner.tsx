import { NavLink, Outlet } from "react-router-dom"

const BookCorner = () => {
  return (
    <article className="grid grid-cols-[1fr 3fr] gap-3.5">
        <nav className="">
            <ul>
                <li><NavLink to="/BookCorner/FavouriteBooks">My Favourite Books</NavLink></li>
                <li><NavLink to="/BookCorner/FavouriteAuthors">My Favourite Authors</NavLink></li>
                <li><NavLink to="/BookCorner/ReadBooks">My Reading History</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </article>
  )
}

export default BookCorner