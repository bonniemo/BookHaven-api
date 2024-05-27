import DisplayBooks from "../../components/DisplayComponents/DisplayBooks";

const FavouriteBooks = () => {
  return (
    <>
      <h1 className="mx-10 my-5 text-xl">My Favourite Books</h1>
      <DisplayBooks favourites />;
    </>
  );
};

export default FavouriteBooks;
