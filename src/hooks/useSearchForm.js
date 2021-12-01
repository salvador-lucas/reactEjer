import { useState } from "react";

export const useSearchForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setInputs((previous) =>({
      ...previous,
      [name]: value
    }));

  }

  const reset = () => {
      setInputs(initialState);
  };

  return[inputs, handleChange, reset];
}