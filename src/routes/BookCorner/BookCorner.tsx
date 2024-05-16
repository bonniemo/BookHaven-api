import { NavLink, Outlet } from "react-router-dom";
import fav from "../../Assets/fav-books-icon.png";
import author from "../../Assets/writing.png";
import readingHistory from "../../Assets/history-book.png";
import readingStats from "../../Assets/analytics.png";

const BookCorner = () => {
  return (
    <article className="flex row-auto">
      <nav className=" min-w-max border-r-4 border-stone-900 flex p-10">
        <ul className="flex flex-col gap-8">
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner">
              <img src={fav} className="mx-2" />
              My Favourite <span className="block">Books</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner/FavouriteAuthors">
              <img src={author} className="mx-2" />
              My Favourite <span className="block">Authors</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner/ReadBooks">
              <img src={readingHistory} className="mx-2" />
              My Reading <span className="block">History</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:font-bold" to="/BookCorner/ReadingStatistics">
              <img src={readingStats} className="mx-2" />
              My Reading <span className="block">Statistics</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </article>
  );
};
export default BookCorner;
