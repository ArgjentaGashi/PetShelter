import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetList from './components/PetList';
import Pet from './components/Pet';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pets/new" element={<CreatePet />} />
        <Route path="/pets/:id" element={<Pet />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
