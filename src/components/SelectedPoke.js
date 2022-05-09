import { useContext } from "react";

import PokeContext from "../context/PokeContext";

import "../css/selectPoke.css"

const SelectedPoke = () => {

  const { selectedPoke } = useContext(PokeContext);

  return(
    <>
     {
       selectedPoke ? (
       <div className="card">
        <img
          alt="imagens de pokemons"
          src={selectedPoke.sprites.front_default}
          className="imagen-pokemon"       
        />
        <h5>Altura: {selectedPoke.height}m</h5> 
        <h5>Peso: {selectedPoke.weight}kg</h5> 
        <div>
          <h5>Lista de Habilidades</h5>
          {selectedPoke.abilities.map((habilidad, id) =>(
            <ul key={id} className="lista-habilidades">
              <li><p>{habilidad.ability.name}</p></li>
            </ul>
          ))}
        </div>
       </div>
       ) : (
         <div>
           <h2>Select a Pokemon</h2>
         </div>
       )
     }
    </> 
  )
}

export default SelectedPoke;