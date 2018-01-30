import React, { Fragment } from 'react'
import { routes } from './../routes'
import { Col, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export default class MainPage extends React.Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Col className={'text-center'} md={12}>
            Connect with local people and find insider travel tips
          </Col>
        </Row>
        <Row>
          <Col md={12} className={'text-center'}>
            <LinkContainer to={routes.popularTips}>
              <Button>Popular tips</Button>
            </LinkContainer>
            {' '}
            <LinkContainer to={routes.verifiedLocals}>
              <Button>Verified locals</Button>
            </LinkContainer>
            {' '}
            <LinkContainer to={routes.latestTips}>
              <Button>Latest tips</Button>
            </LinkContainer>
            {' '}
            <LinkContainer to={routes.newestLocals}>
              <Button>Newest locals</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Fragment>
    )
  }

}