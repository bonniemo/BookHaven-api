import { Book } from "../types/Types";

export type CalculateMostReadAuthor = {
  author_name: string[];
};

export type AuthorCount = {
  author: string;
  numBooks: number;
};

export const calculateMostReadAuthor = (books: Book[]): AuthorCount[] => {
  const readAuthors = books.flatMap((book) => book.author_name);
  const authorCountMap = new Map<string, number>();

  readAuthors.forEach((author) => {
    const count = authorCountMap.get(author) || 0;
    authorCountMap.set(author, count + 1);
  });

  let maxCount = -1;
  let mostReadAuthor: { author: string; numBooks: number }[] = [];

  authorCountMap.forEach((count, author) => {
    if (count > maxCount) {
      maxCount = count;
      mostReadAuthor = [{ author, numBooks: count }];
    } else if (count === maxCount) {
      mostReadAuthor.push({ author, numBooks: count });
    }
  });
  return mostReadAuthor;
};
