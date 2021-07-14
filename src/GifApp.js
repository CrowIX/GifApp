import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {
  const [categories, setCategories] = useState(['CyberPunk']);

  return (
    <>
      <h2>Welcome to 🅖🅘🅕🅐🅟🅟</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export { GifApp };
