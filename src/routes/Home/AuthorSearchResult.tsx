
import DisplayAuthors from "../../components/DisplayComponents/DisplayAuthors";
import { SearchAuthorProps } from "../../types/Types";

const AuthorSearchResult = ({ data }: SearchAuthorProps) => {
  return <DisplayAuthors data={data} />;
};

export default AuthorSearchResult;