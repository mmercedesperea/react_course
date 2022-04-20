import React from "react";

const GifGridItem = (props) => {

  return (
    <div>
      <img src={props.img.url} alt={props.img.title} />
      <p>{props.img.title}</p>
    </div>
  );
};
export default GifGridItem;
