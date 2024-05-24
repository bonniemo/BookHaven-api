export type ReadingHistoryButtonProps = {
  isRead: boolean;
  onOpenReviewForm: () => void;
};

const ReadingHistoryButton = ({
  isRead,
  onOpenReviewForm,
}: ReadingHistoryButtonProps) => {
  return (
    <button
      className={
        isRead
          ? "my-5 px-5 py-2 rounded-lg border-4 border-red-500 hover:bg-red-400  hover:font-bold hover:text-white"
          : "my-5 px-5 py-2 bg-pink-400 rounded-lg hover:bg-purple-400 hover:font-bold"
      }
      onClick={onOpenReviewForm}
    >
      {isRead ? "Remove from my Read Books" : "Add to my Read Books"}
    </button>
  );
};

export default ReadingHistoryButton;
