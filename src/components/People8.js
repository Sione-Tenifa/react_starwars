import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image} from 'semantic-ui-react'


class People8 extends React.Component {

  state = {people: [], page2: [], }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/?page=8")
      .then( res => {
        this.setState({ 
          people: res.data.results,
          page2: res.data.next
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
        </Card>
      </Card.Group>
      
     )
   )
  }
    render () {
      return(
        <Container>
          <br/>
          <div>{this.renderPerson()}</div>
        </Container>
      )
    }
}

export default People8
