import { GET_POKES, GET_POKE } from './types'

export default (state, action) => {
  const {payload, type} = action
  //type el tipo de funcion ejm: GET_POKE
  //payload: los datos que se pasa
  switch(type) {
    case GET_POKES:
      return{
        ...state,
        pokeList: payload,
        // tomamos el estados y actualizamos pokes con payload (PokeSate)
      };
    case GET_POKE:
      return {
        ...state,
        selectedPoke: payload,
      };
    default:
      return state;
  }
};