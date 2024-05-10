import { useFetch } from "../hooks/useFetch";

type Data<T> = {
  docs: T[];
};

const FetchData = <T,>({
  url,
  componentProp: Component,
}: {
  url: string;
  componentProp: React.ComponentType<{ data: Data<T> }>;
}) => {
  const { data, loading, error } = useFetch<Data<T>>(url);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return <>{data && <Component data={data} />}</>;
};
export default FetchData;
