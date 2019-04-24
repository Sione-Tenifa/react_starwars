import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image, Grid} from 'semantic-ui-react'
import People from './People'
import {Link} from 'react-router-dom'





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
    
       <Card.Group >      
        <Card>
          <Card.Content>
            <Image src='http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png' />
            <Card.Header>{ peps.name }</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    )
    )
  }
    render () {
      return(
       <div>{this.renderPlanet}</div>
      )
    }
}

const styles = {
  background: {
    
    height: "500vh",
    width: '100vh',
    // backgroundImage: src("https://wallpapercave.com/wp/wp2902991.jpg")
    backgroundImage: `url(https://wallpapercave.com/wp/wp2902991.jpg)`
  },
  text: {
    color: "white"
  }
}


export default Planet
                
                
                
                
                
