import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import People2 from './components/People2';
import People3 from './components/People3';
import People4 from './components/People4';
import People5 from './components/People5';
import People6 from './components/People6';
import People7 from './components/People7';
import People8 from './components/People8';
import NoMatch from './components/NoMatch';
import Planet from './components/Planet'
import { Container, Image} from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Image src='https://wallpapercave.com/wp/wp2902991.jpg'/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/people2" component={People2} />
        <Route path="/people3" component={People3} />
        <Route path="/people4" component={People4} />
        <Route path="/people5" component={People5} />
        <Route path="/people6" component={People6} />
        <Route path="/people7" component={People7} />
        <Route path="/people8" component={People8} />
        <Route path="/planet" component={Planet} />

        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
