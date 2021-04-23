//Los hooks normalmente comienzan con hooks
//y conmumente son funciones
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  //Los efectos no pueden ser Async
  useEffect(() => {
    getGifs(category).then((imagenes) => {
      setstate({
        data: imagenes,
        loading: false,
      });
    });
  }, [category]);

  return state; //data: [], loading: true
};

// //El use effect hace que lo que este adentro no se recargue
// //por cualquier cosa que mande en esta pagina
// useEffect(() => {
//   //Llamo a la funcion de helper
//   //Le mando la categoria y lo que me devuelve como imagenes
//   //le meto un setImages para tenerlo aca
//   getGifs(category).then((images) => setImages(images));
// }, [category]);
// // con el [category], le digo que si ese cambia, recargue esto
