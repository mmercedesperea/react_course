// adding async makes it a promise
const getImagen = async () => {
    const apiKey = "Rooxzr8pYkepaBG0ahhtrwmdHkDczRAp";
  
    try {
      // add await we say to wait until it is resolved or reject
      const request = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await request.json();
      const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    } catch (error) {
      console.error(error);
    }
  };
  
  getImagen();