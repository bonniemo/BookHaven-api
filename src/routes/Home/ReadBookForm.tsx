import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import { useFormInput } from "../../hooks/useFormInput";

type ReadBookProps = {
  dataKey: string;
  title: string;
  author_name: string[];
  cover_i: string;
  setReviewFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
  setHideBookInfo: React.Dispatch<React.SetStateAction<{[key: string]: boolean}>>
};

const ReadBookForm = ({
  dataKey,
  title,
  author_name,
  cover_i,
  setReviewFormVisibility,
  setHideBookInfo
}: ReadBookProps) => {
  const { dispatch } = useContext(GlobalContext);

  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmitRead = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "ADD_READ_BOOK",
      payload: {
        dataKey: dataKey,
        title: title,
        author_name: author_name,
        cover_i: cover_i,
        userRating: userRating.value,
        userReview: userReview.value,
        userNumPages: userNumPages.value,
      },
    }); 
    setReviewFormVisibility(false);  
    setHideBookInfo((prevState) => ({...prevState, [dataKey]: false}))
  };
  
  return (
    <>
      <article className="w-full h-full">
        <h2>Add to my Reading History</h2>
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
          alt=""
        />

        <p>{title} by {author_name}</p>
        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <>
            <label htmlFor="userRating ">Rating</label>
            <input type="number" {...userRating} id="userRating" />
          </>
          <>
            <label htmlFor="userReview">Your Review</label>
            <input type="text" {...userReview} id="userReview" />
          </>
          <>
            <label htmlFor="userNumPages">Number of pages</label>
            <input type="number" {...userNumPages} id="userNumPages" />
          </>
          <button type="submit">Add to my read Books</button>
        </form>
      </article>
    </>
  );
};

export default ReadBookForm;
