import React, { Component } from 'react'
import "./App.css"
import { Allamericans } from './components/Allamericans'
import Allrise from "./components/Allrise"






export default class App extends  Component{


  constructor(){
    super()
    this.state={
  Showname:[],
    }
  }


componentDidMount(){
  fetch("https://api.tvmaze.com/search/shows?q=all").
  then(response=>response.json()).then((shows)=>this.setState(()=>{
    return{Showname:shows}
  },()=>{
    console.log(this.state)
  }
  ))

}


  render(){
    return(
  <div className="card-list ">

    {this.state.Showname.map((movie)=>{
      return(
        <div class="card-container">

          <h1>{movie.show.name}</h1>
          <h2>Language:{movie.show.language}</h2>
          <h2>genres:{movie.show.genres[0]}</h2>
          
        
<a href="#summary">summary</a>
          
      
        </div>
      )
    })}
    <br/>
   
   <Allamericans/>
   <Allrise/>
  </div>
    )
  }
}

    