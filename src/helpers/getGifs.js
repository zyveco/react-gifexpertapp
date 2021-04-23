export const getGifs = async (category) => {
  //Guardo en url el url de mi peticion API
  //Dentro de el puse lo que recivi y le clave un encode
  //que me elimina espacios y cosas molestas del string
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=wNgnBe6aznAKmhtYChmYuEfMkPKIqri7`;

  //Hago la peticion fetch y la guardo en resp
  const resp = await fetch(url);
  //Cambio el formato de la respuesta a un json y lo guardo
  const { data } = await resp.json();

  //Hago el mapeo del json que consegui y me quedo con cosas especificas
  const gifs = data.map((img) => {
    return {
      id: img.id,
      tittle: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  //Ponemos todos los tados que saque de gifs en images
  return gifs;
};
