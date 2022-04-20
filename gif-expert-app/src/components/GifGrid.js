import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // controla que el codigo solo se ejecute cuando el componente sea renderizado por primera vez
  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=Rooxzr8pYkepaBG0ahhtrwmdHkDczRAp`;
    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    setImages(gifs);
  };
console.log(images[0])
  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((img) => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </ol>
    </div>
  );
};

export default GifGrid;
