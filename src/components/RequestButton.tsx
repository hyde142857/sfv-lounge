import { GithubLoginButton } from 'react-social-login-buttons';
import { launchNewIssue, launchGithub } from '../api/Utils';
import { Props } from '../types/Defs';
import { Row, Col } from 'react-bootstrap';

function RequestButton(props:Props) {
  return (
    <Row>
      <Col>
        <GithubLoginButton onClick={() => launchNewIssue(props.twdata)} >
          <span>要望・問題報告</span>
        </GithubLoginButton>
      </Col>
      <Col>
        <GithubLoginButton onClick={() => launchGithub(props.twdata)} >
          <span>GitHub repository</span>
        </GithubLoginButton>
      </Col>
    </Row>
  );
}

export default RequestButton;
