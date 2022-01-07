import { GithubLoginButton } from 'react-social-login-buttons';
import { launchNewIssue, launchGithub } from '../api/Utils';
import { Row, Col } from 'react-bootstrap';

function RequestButton() {
  return (
    <Row>
      <Col>
        <GithubLoginButton onClick={() => launchNewIssue()} >
          <span>要望・問題報告</span>
        </GithubLoginButton>
      </Col>
      <Col>
        <GithubLoginButton onClick={() => launchGithub()} >
          <span>GitHub repository</span>
        </GithubLoginButton>
      </Col>
    </Row>
  );
}

export default RequestButton;
