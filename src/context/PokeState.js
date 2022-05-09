import { useReducer } from "react";
import axios from "axios";

import PokeContext from './PokeContext';
import PokeReducer from './PokeReducer';
import { GET_POKE, GET_POKES } from "./types";

//creamos el state
const PokeState = (props) => {
  const initialState = {
    pokeList: [],
    selectedPoke: null,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const getPokes = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    //console.log(res);
    dispatch({
      type: GET_POKES,
      payload: res.data.results
    })
  }

  const setPoke = async (id) => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/"+ id);
      //console.log(res.data);
      dispatch({
        type: GET_POKE,
        payload: res.data
      })
    } catch(error) {
      console.error(error);
    }
  }
  return(
    <PokeContext.Provider
    value={{
      pokeList: state.pokeList,
      selectedPoke: state.selectedPoke,
      getPokes,
      setPoke,
    }}>
      {props.children}
    </PokeContext.Provider>
    
  )
}

export default PokeState;


