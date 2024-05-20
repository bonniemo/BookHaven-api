import DisplayBooks from "../../components/DisplayBooks";
import { SearchBooksProps } from "../../types/Types";

const TitleSearchResult = ({ data }: SearchBooksProps) => {  
  return <DisplayBooks data={data} />;
};

export default TitleSearchResult;