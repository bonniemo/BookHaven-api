import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

export const MostReadAuthor = () => {
  const { state } = useContext(GlobalContext);
  const [mostReadAuthors, setMostReadAuthors] = useState<{author: string, numBooks: number}[]>([]);

  useEffect(() => {
    const readAuthors = state.readBooks.flatMap((book) => book.author_name);
    const authorCountMap = new Map<string, number>();

    readAuthors.forEach((author) => {
      const count = authorCountMap.get(author) || 0;
      authorCountMap.set(author, count + 1);
    });

    let maxCount = -1;
    let maxAuthors: { author: string, numBooks: number }[] = [];

    authorCountMap.forEach((count, author) => {
      if (count > maxCount) {
        maxCount = count;
        maxAuthors = [{author, numBooks: count}];
      } else if (count === maxCount) {
        maxAuthors.push({author, numBooks: count});
      }
    });

    setMostReadAuthors(maxAuthors);
  }, [state.readBooks]);

  return mostReadAuthors;
};
