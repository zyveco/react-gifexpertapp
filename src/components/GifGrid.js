import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //Renombro a data como images con el data:images
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      {loading && (
        <p className="animate__animated animate__fadeInLeft">Loading</p>
      )}

      <div className="card-grid">
        {/* Mapeo images para tenerlo como y desustructuro sus partes */}
        {/* {images.map(({ id, tittle }) => {
        return <li key={id}>{tittle}</li>;
      })} */}

        {images.map((images) => {
          return <GifGridItem key={images.id} {...images} />;
          // podria usar images= {images} en vez del ...images
        })}
      </div>
    </>
  );
};
