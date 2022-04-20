import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const initialState = ["dog", "samurai", "dragon"];

  const [categories, setCategories] = useState(initialState);

  //   const handleAdd = () => {
  //     // setCategories([...categories, "cat"]);
  //     // to put the new element at the beginning
  //     // setCategories(['cat',...categories]);
  //     // another option is return a new array with all the categories and the new one
  //     setCategories((originalArray) => [...originalArray, "garfild"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category, i) => {
          return <li key={category + i}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
