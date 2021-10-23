import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";

import Search from "./Search";
import Table from "./Table";


// eslint-disable-next-line 
class App extends React.Component{
  state={
    movie:[],
    genre:[],
    selectedgenre:"All Genere",
  }
  setFilter=(filter)=>{
    this.setState({selectedgenre:filter})
  }

  componentDidMount(){
    let f=async ()=>{
      let responsemovies=await fetch("http://localhost:4000/movies");
      let responsegenre=await fetch("http://localhost:4000/genre") 
      let genreJson =await responsegenre.json();
      let moviesJson=await responsemovies.json();
      this.setState({
        movie:moviesJson,
        genre:genreJson,
      })
      
    };
    f()
  }
  render(){
    return( 
    <div>
      <Navbar/>
      <div className="row">
        <Filter 
        handleFilter={this.setFilter}
        genreData={this.state.genre}
        selectedFilter={this.state.selectedgenre}
        />


        <div class="col-9 p-4">
          <Search/>
          <Table  selectedFilter={this.state.selectedgenre} movieData={this.state.movie}/>
          
        </div>
      </div>
      
    </div>
    )}
  
}
export default App;