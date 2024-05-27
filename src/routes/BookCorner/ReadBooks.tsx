import DisplayBooks from "../../components/DisplayComponents/DisplayBooks";

const ReadBooks = () => {
  return (
    <>
      <h1 className="mx-10 my-5 text-xl">My Reading History</h1>
      <DisplayBooks read />;
    </>
  );
};

export default ReadBooks;
