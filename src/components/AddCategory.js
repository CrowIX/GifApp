import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Add a category...');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClickValue = () => {
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2 && inputValue !== 'Add a category...') {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    } else {
      alert(
        `Your search parameter is too short, must be 4 letters long at least.`
      );
    }
  };
  return (
    <form className="form_input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleClickValue}
      />
      <p>Please, write something and press Enter!</p>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired,
};
