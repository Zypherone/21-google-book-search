// import React from 'react';
// 
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Col, Jumbotron } from 'react-bootstrap'
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Search from 'pages/Search';
import Saved from 'pages/Saved';
import Page404 from 'pages/Page404';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Container as="main">
          <Nav />
          <Jumbotron fluid>
            <Col>
              <h1 className="display-1">Google Book Search</h1>
            </Col>
          </Jumbotron>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/saved/:id" component={Saved} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Container>
      </Container>
    </Router>
  );
}

export default App;


// const App = () => {

//   /*
//   const handleChange = (...props) => {
//     console.log(props);
//   }
//   */

//   return (
//     <Container>
//       <Row>
//         <Col xs={6} md={4}>
//           xs=6 md=4
//         </Col>
//         <Col xs={12} md={8}>
//           xs=12 md=8
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={6} md={4}>
//           xs=6 md=4
//         </Col>
//         <Col xs={12} md={8}>
//           xs=12 md=8
//         </Col>
//       </Row>
//     </Container>
//   );
// }
  
// export default App;
