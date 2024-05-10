import { NavLink, Outlet } from "react-router-dom"
import fav from '../../Assets/fav-books-icon.png'
import author from '../../Assets/writing.png'
import readingHistory from '../../Assets/history-book.png'

const BookCorner = () => {
  return (
    <article className="flex row-auto">
        <nav className=" border-r-8 border-fuchsia-50 flex p-5 w-48">
            <ul className="flex flex-col gap-10 mt-5">
                <li className="mb-5"><NavLink className="" to="/BookCorner/FavouriteBooks"><img src={fav} className="mx-2"/>My Favourite Books</NavLink></li>
                <li className="mb-5"><NavLink className="" to="/BookCorner/FavouriteAuthors"><img src={author} className="mx-2"/>My Favourite Authors</NavLink></li>
                <li className="mb-5"><NavLink className="" to="/BookCorner/ReadBooks"><img src={readingHistory} className="mx-2"/>My Reading History</NavLink></li>
                <li className="mb-5"><NavLink className="" to="/BookCorner/AggregatedData"><img src={readingHistory} className="mx-2"/>My Reading Statistics</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </article>
  )
}
export default BookCorner