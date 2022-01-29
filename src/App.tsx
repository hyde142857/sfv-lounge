import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar} from 'react-bootstrap';
import TweetFormPage from './pages/TweetFormPage';
import { CheckLiveTweetButton, RequestButton } from './components';

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  background: '#101010',
}

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
    <Container>
      <hr />
      <CheckLiveTweetButton />
    </Container>
    <Container>
      <hr />
      <RequestButton />
    </Container>
    <div className="footer-copyright text-center py-3">© 2021-2022 Copyright:
      Hyde (Twitter:<a href="https://twitter.com/hyde142857">Follow @hyde142857</a>)
    </div>
  </>);
}

export default App;
