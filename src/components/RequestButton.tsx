import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { launchNewIssue, launchGithub } from '../api/Utils';
import { Row, Col } from 'react-bootstrap';

function RequestButton() {
  return (
    <Row>
      <Col>
        <TwitterLoginButton onClick={() => launchNewIssue()} >
          <span>要望・問題</span>
        </TwitterLoginButton>
      </Col>
      <Col>
        <GithubLoginButton onClick={() => launchGithub()} >
          <span>GitHub</span>
        </GithubLoginButton>
      </Col>
    </Row>
  );
}

export default RequestButton;
