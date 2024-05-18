import { DisplayDataCardProps } from "../types/Types";
import FavouriteToggleButton from "./FavouriteToggleButton";
import ReadingHistoryButton from "./ReadingHistoryButton";

const DisplayDataCard: React.FC<DisplayDataCardProps> = ({
  imgUrl,
  title,
  subTitle,
  otherInfo,
  userRating,
  userReview,
  userNumPages,
  onDelete,
  isFavourite = false,
  isRead = false,
  onToggleFavourite,
  onOpenReviewForm,
}) => {
  return (
    <article className="min-w-72 max-w-72 max-h-min p-5 rounded-lg border-8 border-stone-900 flex flex-col leading-relaxed">
      <img
        src={imgUrl}
        alt={`Book cover of ${title}`}
        className="w-full h-52 object-contain object-center rounded mb-4"
      />
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      {otherInfo}
      <p>{userRating}</p>
      <p>{userReview}</p>
      <p>{userNumPages}</p>
      {onToggleFavourite && (
        <FavouriteToggleButton
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      )}
      {onOpenReviewForm && (
        <ReadingHistoryButton
          isRead={isRead}
          onOpenReviewForm={onOpenReviewForm}
        />
      )}
      {onDelete && (
        <button
          className="my-5 px-5 py-2 bg-red-400 rounded-lg"
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </article>
  );
};

export default DisplayDataCard;
