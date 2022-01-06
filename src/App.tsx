import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar} from 'react-bootstrap';
import TweetFormPage from './pages/TweetFormPage';

function App() {

  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">スト5ラウンジ募集</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <TweetFormPage />
    </Container></>
  );
}

export default App;
