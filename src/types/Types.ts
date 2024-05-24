import { InputHTMLAttributes } from "react";

// Book Types
export type Book = {
  key: string;
  title: string;
  first_publish_year: number;
  author_name: string[];
  cover_i: string;
  userRating?: string | undefined;
  userReview?: string | undefined;
  userNumPages?: string | undefined;
};

// Author Types
export type Author = {
  key: string;
  name: string;
  birth_date: string;
  top_work: string;
  top_subjects: string[];
};

// Read BookProps Types
export type ReadBookProps = {
  setCurrentReviewKey: (key: string) => void;
};

// Display Card Types
export type DisplayDataCardProps = {
  imgUrl: string;
  title: string;
  subTitle: string;
  otherInfo: React.ReactNode;
  userRating?: string;
  userReview?: string;
  userNumPages?: string;
  onDelete?: () => void;
  isFavourite?: boolean;
  isRead?: boolean;
  onToggleFavourite?: () => void;
  onOpenReviewForm?: () => void;
};

export type DisplayBooksCardProps = {
  booksArr: Book[];
  toggleFavourite: (bookObj: Book) => void;
};

// Display Data Types
export type DisplayBookProps = {
  data?: {
    docs: Book[];
  };
  favourites?: boolean;
  read?: boolean;
};

export type SearchBooksProps = {
  data: {
    docs: Book[];
  };
};

export type SearchAuthorProps = {
  data?: {
    docs: Author[];
  };
};

export type DisplayAuthorProps = {
  data?: {
    docs: Author[];
  };
  favourites?: boolean;
};

// Children Prop Type
export type ChildrenProp = {
  children: React.ReactNode;
};

// Global State Types
export type InitialStateTypes = {
  favouriteBooks: Book[];
  readBooks: Book[];
  bookToReview: Book | null;
  favouriteAuthors: Author[];
};

export type Action =
  | { type: "ADD_FAV_BOOK"; payload: Book }
  | { type: "REMOVE_FAV_BOOK"; payload: string }
  | { type: "ADD_READ_BOOK"; payload: Book }
  | { type: "REMOVE_READ_BOOK"; payload: string }
  | { type: "SET_REVIEW_BOOK"; payload: Book }
  | { type: "ADD_FAV_AUTHOR"; payload: Author }
  | { type: "REMOVE_FAV_AUTHOR"; payload: string };

// Component types
export type FormInputProps = {
  label: string;
  type: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};
