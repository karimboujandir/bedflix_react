import './App.css';
import BasicExample from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundBody from './background';
import Carousels from './carousel';
import Recherche from './recherche';

function App() {
  return (
    <div className="App">
      <BasicExample/>
      <BackgroundBody/>
      <Carousels/>
      <Recherche/>

    </div>
  );
}

export default App;
