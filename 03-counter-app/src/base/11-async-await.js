// adding async makes it a promise
export const getImagen = async () => {
  const apiKey = "Rooxzr8pYkepaBG0ahhtrwmdHkDczRAp";

  try {
    // add await we say to wait until it is resolved or reject
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await request.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No exits';
  }
};

getImagen();
