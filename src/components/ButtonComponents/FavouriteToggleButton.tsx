import { GoHeartFill, GoHeart } from "react-icons/go";

export type FavouriteToggleButtonProps = {
  isFavourite: boolean;
  onToggleFavourite: () => void;
};

const FavouriteToggleButton = ({
  isFavourite,
  onToggleFavourite,
}: FavouriteToggleButtonProps) => {
  return (
    <button
      className="my-5 px-5 py-2 bg-pink-300 rounded-lg"
      onClick={onToggleFavourite}
    >
      {isFavourite ? (
        <GoHeartFill className="text-3xl" />
      ) : (
        <GoHeart className="text-3xl" />
      )}
    </button>
  );
};

export default FavouriteToggleButton;
