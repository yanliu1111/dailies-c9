import './App.css';
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

function App() {
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <SuperheroDetail />
      <SuperheroForm />
      <SuperheroList />
    </div>
  );
}

export default App;
