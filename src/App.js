import './App.css';
//coponents
import SelectedPoke from './components/SelectedPoke'
import Pokelist from './components/PokeList';
//context
import PokeState from './context/PokeState'

function App() {
  return (
   <PokeState>
     <div className='contenedor'>
     <Pokelist/>
     <SelectedPoke/>
     </div>
   </PokeState>   
  );
}

export default App;
