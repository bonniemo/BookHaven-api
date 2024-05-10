export type Book = {
  key: string;
  title: string;
  first_publish_year: number;
  author_name: string[];
  cover_i: string;
};

export type DisplayBookProps = {
  data: {
    docs: Book[];
  };
};

export type Author = {
  key: string;
  name: string;
  birth_date: string;
  top_work: string;
  top_subjects: string[];  
};

export type DisplayAuthorProps = {
  data: {
    docs: Author[];
  };
};

export type InitialStateTypes = {
  favouriteBooks: Book[];
  readBooks: ReadBook[];
  favouriteAuthors: Author[];
};

export type ChildrenProp = {
  children: React.ReactNode;
};

export type DisplayDataCards = ChildrenProp & {
  dataKey: string;
}

export type ReadBook = {
  dataKey: string;
  title: string;  
  author_name: string[];
  cover_i: string;  
  userRating: string;
  userReview: string;
  userNumPages: string;
}

export type Action =
  | { type: "ADDFAVBOOK"; payload: Book }
  | { type: "REMOVEFAVBOOK"; payload: string }
  | { type: "ADDFAVAUTHOR"; payload: Author }
  | { type: "REMOVE_FAV_AUTHOR"; payload: string }
  | { type: "ADD_READ_BOOK"; payload: ReadBook }
  | { type: "REMOVE_READ_BOOK"; payload: string }
