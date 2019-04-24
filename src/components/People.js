import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image, Grid, Button} from 'semantic-ui-react'
import People2 from './People2'
import People3 from './People3'
import People4 from './People4'
import People5 from './People5'
import People6 from './People6'
import People7 from './People7'
import People8 from './People8'
import {Link} from 'react-router-dom'
import Planet from './Planet'




class People extends React.Component {

  state = {people: [],  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then( res => {
        this.setState({ 
          people: res.data.results,
          
          
        });
      })
  }
          

  
  renderPerson = () => {
    const { people,} = this.state
    
    return people.map( peps => (
    
       <Card.Group >      
        <Card>
          <Card.Content>
            <Image src='http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png' />
            <Card.Header>{ peps.name }</Card.Header>
            <Link to='/planet'>
            <Planet homeworld={peps.homeworld}/>
            <Button>
              Planet
            </Button>
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
      

      
     )
   )
  }
    render () {
      return(
        <Container style={styles}>

              <Header as='h1'>People of Star wars</Header>
              <br/>
          <Grid>
            <Grid.Row columns={8}>
              <Grid.Column>
                <div>{this.renderPerson()}</div>
              </Grid.Column>
              <Grid.Column>
                <People2/>
              </Grid.Column>
              <Grid.Column>
                <People3/>
              </Grid.Column>
              <Grid.Column>
                <People4/>
              </Grid.Column>
              <Grid.Column>
                 <People5/>
              </Grid.Column>
              <Grid.Column>
                <People6/>
              </Grid.Column>
              <Grid.Column>
                <People7/>
              </Grid.Column>
              <Grid.Column>
                <People8/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
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


export default People 
                
                
                
                
                

                
                
