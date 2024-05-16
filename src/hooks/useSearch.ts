import { useState } from "react";

export const useSearch = (baseUrl: string, searchInput: string) => {
  const [searchUrl, setSearchUrl] = useState("");

  const handleClick = () => {
    const formatedInput = searchInput.replace(/ /g, "+");
    const searchUrl = `${baseUrl}${formatedInput}&limit=20`;
    setSearchUrl(searchUrl);
  };
  return { handleClick, searchUrl };
};
