import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";


// eslint-disable-next-line 
class App extends React.Component{
  state={
    movie:[],
    genre:[],
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
        <Filter genreData={this.state.genre}/>
      </div>
    </div>
    )}
  
}
export default App;