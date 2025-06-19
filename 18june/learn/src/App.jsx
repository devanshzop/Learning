import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use'

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }

}

const App = () => {
  const [searchterm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [moviesList,setMoviesList] = useState([])
  const [isLoading,setIsloading] = useState(false)
  const [debouncesearch,setDebouncesearch] = useState('')

useDebounce(()=>setDebouncesearch(searchterm),500,[searchterm]);

  const fetchMovies = async (query='') => {
setIsloading(true)
setErrorMessage('')
    
    try {
      const endpoint = query ?
    `${API_BASE}/search/movie?query=${encodeURIComponent(query)}`
     : `${API_BASE}/discover/movie?sort_by=popularity.desc`
    
      const response = await fetch(endpoint,API_OPTIONS)

      if(!response.ok){
        throw new Error("Failed To Fetch")
      }
      const data = await response.json();
  
      if(data.Response==='False'){
        setErrorMessage(data.Error ||"Failledddd")
        setMoviesList([])
        return;

      }

      setMoviesList(data.results||[])

    } catch (error) {
      console.log(`Error Fetching ${error}`);
      setErrorMessage("Error while fetching movies please try again Later")

    }finally{
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncesearch);
    console.log("hiii")
  }, [debouncesearch])

  return <main>

    <div className="pattern" />

    <div className="wrapper">
      <header>
        <img src="./hero.png"></img>
        <h1>Enjoy your<span className="text-gradient"> Favorite Movies</span> no hassle, just fun.</h1>
        <Search searchterm={searchterm} setSearchTerm={setSearchTerm} />
      </header>

      <section className="all-movies">
        <h2 className="mt-[40px]"> All Movies</h2>

        {isLoading ? (
          <Spinner/>
        ): errorMessage ?(
          <p className="text-red-500">{errorMessage} </p>
        ) : (
          <ul>
            {moviesList.map((movie)=>(
         <MovieCard key={movie.id} movie={movie}/>
            ))}
          </ul>
        )}

        
      </section>


    </div>

  </main>
}

export default App;