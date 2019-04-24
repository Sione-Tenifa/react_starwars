import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image, Button} from 'semantic-ui-react'
import Planet from './Planet'
import {Link} from 'react-router-dom'


class People2 extends React.Component {

  state = {people: [], page: [], }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/?page=2")
      .then( res => {
        this.setState({ 
          people: res.data.results,
          page: res.data.next
        });
      })
  }
          

  
  renderPerson = () => {
    const { people, } = this.state
    return people.map( peps => (
      
       <Card.Group>      
        <Card>
          <Card.Content>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1TZcgE-gwcMmbULgdZzH15BQYdhB_A0oA0MHLzaIsWvwO3qw' />
            <Card.Header>{ peps.name }</Card.Header>
          </Card.Content>
          <Link to='/planet'>
            <Planet homeworld={peps.homeworld}/>
            <Button>
              Planet
            </Button>
          </Link>
        </Card>
      </Card.Group>
      
     )
   )
  }
    render () {
      return(
        <Container>
          <div>{this.renderPerson()}</div>
        </Container>
      )
    }
}

export default People2 
