import { useState } from "react";

export function useToggle(initialValue) {
  const [value, toggle] = useState(initialValue);
  function change() {
    toggle((tog) => !tog);
  }
  return [value, change];
}
