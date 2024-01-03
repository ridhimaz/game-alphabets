import './App.css';
import Key from "./components/Key";
import 'bootstrap/dist/css/bootstrap.min.css';
import mockData from "./data/data";
import { useState } from 'react';
import Display from './components/Display';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selectedgif, setSelectedgif] = useState(null);
  const [border,setBorder]=useState(-1);
  console.log("render", selectedgif)
  return (
    <>

      <Display gif={selectedgif} />
      <Container className='stack' fluid>
        <Row className='row'>
          <Col className='col' >
            {
              mockData.map((obj,ind) => { return <Key key={obj.key}  setSelectedgif={setSelectedgif}  obj={obj} border={border===ind} setBorder={setBorder} index={ind}/> }
              )
            }
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
