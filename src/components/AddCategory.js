import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    //Tomo el evento e (toca tecla) y lo uso
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion de si me manda algo vacio
    if (inputValue.trim().length > 2) {
      // invoco el set que me dieron y la lista, junto al input
      setCategories([inputValue, ...categories]);
      //reseteo mi input
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

//El "setState" es una funcion, y pongo que es requerida 4thelulz
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
