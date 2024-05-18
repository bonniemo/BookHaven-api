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

// Read Book Types
export type ReadBookProps = {
  dataKey: string;
  title: string;
  author_name: string[];
  cover_i: string;
  first_publish_year: number;
  setReviewFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

// Display Card Types
export type DisplayDataCardProps = {
  imgUrl: string;
  title: string;
  subTitle: string;
  otherInfo: React.ReactNode;
  onDelete?: () => void;
  isFavourite?: boolean;
  isRead?: boolean;
  onToggleFavourite?: () => void;
  onOpenReviewForm?: () => void;
};

export type DisplayDataCards = ChildrenProp & {
  dataKey: string;
};

// Display Data Types
export type DisplayBookProps = {
  data: {
    docs: Book[];
  };
};

export type SearchAuthorProps = {
  data?: {
    docs: Author[];
  };
}

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

// State Types
export type InitialStateTypes = {
  favouriteBooks: Book[];
  readBooks: Book[];
  favouriteAuthors: Author[];
};

// Action Types
export type Action =
  | { type: "ADD_FAV_BOOK"; payload: Book }
  | { type: "REMOVE_FAV_BOOK"; payload: string }
  | { type: "ADD_FAV_AUTHOR"; payload: Author }
  | { type: "REMOVE_FAV_AUTHOR"; payload: string }
  | { type: "ADD_READ_BOOK"; payload: Book }
  | { type: "REMOVE_READ_BOOK"; payload: string };
