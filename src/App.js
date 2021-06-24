
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header';
import Back from './components/Back';
import P1 from './components/P1';
import P2 from './components/P2';
import P3 from './components/P3';
import Item from './components/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
<Router>
<Container>
<Row>
  <Col style={{border: '1px solid black ', textAlign:'center'}}> 
<Header></Header>
<Link to='/Item'>Back</Link>
   </Col>
</Row>
<Row>
 <Col style={{border: '1px solid black ', textAlign:'left'}}> 
 <Link to="P1">P1</Link> </Col>

   <Col style={{border: '1px solid black ', textAlign:'center'}}> 
   <Link to="P2">P2</Link>
   </Col>
   <Col style={{border: '1px solid black ', textAlign:'right'}}> 
   <Link to="/P3">P3</Link>
    <Switch>
          <Route exact path="/P1">
            <P1 />
          </Route>
          <Route path="/P2">
            <P2 />
          </Route>
          <Route path="/P3">
            <P3 />
          </Route>
        </Switch>
    </Col>
    

</Row>

</Container>
             
    </Router>
    
    </>
  );
}

export default App;
