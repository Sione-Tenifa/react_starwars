import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image, Grid} from 'semantic-ui-react'
import People from './People'
import {Link} from 'react-router-dom'



// const Planet = (homeworld) => (
//   <div>
//     <h2>{homeworld.name}</h2>
    
//   </div>
// );


// export default Planet;

class Planet extends React.Component {

  state = {planet: [],  }

  componentDidMount() {
    axios.get(this.props.homeworld)
      .then( res => {
        this.setState({ 
          planet: res.data
        });
      })
  }
          

  
  renderPlanet = () => {
    debugger
    const { planet, } = this.state
    return planet.map( peps => (
    
       <div>{peps.name}</div>
    )
    )
  }

    render () {
      return(
        <>
       <div>{this.renderPlanet}</div>
       </>
      )
    }
}


export default Planet
                
                
                
                
                
