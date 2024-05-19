import { useFetch } from "../hooks/useFetch";

export type Quote = {
  _id: string;
  quote: string;
  book: string;
  author: string;
  length: number;
  words: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const RandomAuthorQuote = () => {
  const { data, loading, error } = useFetch<Quote>(
    "https://recite.onrender.com/random/quote-from-db"
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section className="mt-5 p-10 flex flex-col justify-center">
      <h1 className="mb-5 w-2/4 self-center text-4xl">"{data?.quote}"</h1>
      <p className="self-center">
        by {data?.author} in {data?.book}
      </p>
    </section>
  );
};

export default RandomAuthorQuote;
