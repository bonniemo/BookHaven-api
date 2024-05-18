import DisplayAuthors from "../../components/DisplayAuthors";
import { SearchAuthorProps } from "../../types/Types";

const AuthorSearchResult = ({ data }: SearchAuthorProps) => {
  return <DisplayAuthors data={data} />;
};

export default AuthorSearchResult;