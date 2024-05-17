import { DisplayDataCardProps } from "../types/Types";

const DisplayDataCard = ({
  imgUrl,
  onDelete,
  title,
  subTitle,
  otherInfo,
}: DisplayDataCardProps) => {
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
      <button
        className="my-5 px-5 py-2 bg-red-400 rounded-lg"
        onClick={onDelete}
      >
        Delete
      </button>
    </article>
  );
};

export default DisplayDataCard;
