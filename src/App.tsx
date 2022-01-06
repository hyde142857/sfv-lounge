import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar} from 'react-bootstrap';
import TweetFormPage from './pages/TweetFormPage';

function App() {

  return (<>
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand>スト5ラウンジ募集ツール</Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Container>
      <TweetFormPage />
    </Container>
  </>);
}

export default App;
