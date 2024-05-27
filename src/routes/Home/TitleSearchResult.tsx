import DisplayBooks from "../../components/DisplayComponents/DisplayBooks";
import { SearchBooksProps } from "../../types/Types";

const TitleSearchResult = ({ data }: SearchBooksProps) => {
  return <DisplayBooks data={data} />;
};

export default TitleSearchResult;
