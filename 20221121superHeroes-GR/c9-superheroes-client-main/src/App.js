import './App.css';
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portal from './components/Portal';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Portal />}>
            <Route path="/superheroes" element={<SuperheroList />} />
            <Route path="/superheroes/create" element={<SuperheroForm />} />
            <Route
              path="/superheroes/detail/:id"
              element={<SuperheroDetail />}
            />
          </Route>
        </Routes>
      </Router>
      {/* <SuperheroDetail id={superheroId} />
      <SuperheroForm />
      <SuperheroList setSuperheroId={setSuperheroId} /> */}
    </div>
  );
}

export default App;
