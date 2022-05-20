import React, { Component } from 'react'
import "./Cardlist.styles.css"
class Cardlist extends Component {
    render(){
        const {movie}=this.props
        return(
            <div className='card-list'>
               {movie.map(s=>{
               <div className='card-container'>
                   <h2>{s.show.name}</h2>
                
               </div>
               })}
            </div>
        )
    }
}
export default Cardlist