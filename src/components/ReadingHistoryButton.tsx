export type ReadingHistoryButtonProps = {
  isRead: boolean;
  onOpenReviewForm: () => void;
};

const ReadingHistoryButton: React.FC<ReadingHistoryButtonProps> = ({
  isRead,
  onOpenReviewForm,
}) => {
  return (
    <button
      className={
        isRead
          ? "my-5 px-5 py-2 rounded-lg border-4 border-pink-400"
          : "my-5 px-5 py-2 bg-pink-400 rounded-lg hover:bg-purple-300 hover:font-bold"
      }
      onClick={onOpenReviewForm}
    >
        {isRead ? "Added to my Read Books" : "Add to my Read Books"}
    </button>
  );
};

export default ReadingHistoryButton;
