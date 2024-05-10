import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => setToggle((toggle) => !toggle);

  return { toggle, toggleState };
};
