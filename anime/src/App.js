import './App.css';
import Header from './components/Header';
import SearchAnime from './components/SearchAnime';
import AnimeList from './components/AnimeList';
import { useState } from 'react';

function App() {

const [searchTerm, setSearchTerm] = useState('One piece')

  return (
    <div className="App">
      <Header searchTerm = {searchTerm}/>
      <SearchAnime  setSearchTerm = {setSearchTerm}/>
      <AnimeList searchTerm = {searchTerm}/>
    </div>
  );
}

export default App;
