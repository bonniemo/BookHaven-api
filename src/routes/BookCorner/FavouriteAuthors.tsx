import DisplayAuthors from "../../components/DisplayComponents/DisplayAuthors";


const FavouriteAuthors = () => {
  return (
    <>
      <h1 className="mx-10 my-5 text-xl">My Favourite Authors</h1>
      <DisplayAuthors favourites />;
    </>
  );
};
export default FavouriteAuthors;
