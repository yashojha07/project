import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";
import "./App.css"
import Nav from "./components/Nav/navbar"
// import Filter from "./components/Filter/Filter";
import Card from "./components/Cards/Card";
// import img1 from "./components/image/peakpx.jpg"
import { useEffect, useState } from "react";
import  {Pagination } from "./components/Pagination/Page";
import { Search } from "./components/Search/Search";
import Filter from "./components/Filter/Filter";

import { Location } from "./pages/Location";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Episodes } from "./pages/Episodes";

const Home = () => {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")
  const [species, SetSpecies] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&gender=${gender}&status=${status}&species=${species}`;

  let [fetchedData, setData] = useState([]);

  let { info, results } = fetchedData;



  const fetchUsers = async () => {
    try {
      let response = await fetch(api);
      let data = await response.json();

      setData(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [api])  //dependecny array--->changing along with new api calls for every page

  return (<>
  
  <div className="lower">
    <div className="comp-2">
      <div className="filter">
        <h3>Filter</h3>
        <Filter setGender={setGender} setStatus={setStatus} SetSpecies={SetSpecies} />


      </div>
      <div className="search">
        <Search setPage={setPage} setSearch={setSearch} />
      </div>
    </div>
    <Card results={results} />
    <Pagination page={page} setPage={setPage} />
  </div>
  </>);
}


function App() {

 

 


  return (
     <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element ={<Location/>}/>
      <Route path ="/episodes" element = {<Episodes/>}/>
      </Routes>
     </Router>
  );
}

export default App;
