import { useEffect, useContext } from "react";

import PokeContext from "../context/PokeContext";

import "../css/pokeList.css"

const PokeList = () => {

  const { pokeList, getPokes, setPoke } = useContext(PokeContext);

  useEffect(()=> {
    getPokes();
  },[])

    return(
    <div className="lista-contenedor">
     {
      
       pokeList.map((poke, id) => (
        <button type="text" className="boton-pokemon" key={id+1} onClick={() => setPoke(id+1)}>
          <p>{poke.name}</p>
        </button>
       ))
     }
    </div>
  )
}

export default PokeList;