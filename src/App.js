import logo from './logo.svg';
import './App.css';
import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

function App() {
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      {/* I want to list a bunch of animals... */}
      {/* Each animal has its name and photo */}
      <AnimalList></AnimalList>
    </section>
  );
}

export default App;
