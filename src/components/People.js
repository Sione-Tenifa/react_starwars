import React from 'react'
import axios from 'axios'
import {Header, Container} from 'semantic-ui-react'


class People extends React.Component {

  state = {people: []}

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then( res => {
        this.setState({ people: res.data, });
      })
  }

  // getPeople()


    render () {
      return(
        <Container>
          <br/>
          <Header>Hello People</Header>

        </Container>
      )
    }
}

export default People 
