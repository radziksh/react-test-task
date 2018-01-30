import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import VerifiedLocalsPage from './components/VerifiedLocalsPage'
import PopularTipsPage from './components/PopularTipsPage'
import LatestTipsPage from './components/LatestTipsPage'
import NewestLocalsPage from './components/NewestLocalsPage'
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { routes } from "./routes"
import { Col, Row, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import 'tachyons'
import './index.css'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjd1svpqr08dh0190jx2hzvmu' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <Fragment>
        <div className={"fluid-container"} style={{
          width: "auto",
          padding: "0 15px",
        }}>
          <Row>
            <Col className={'text-center'} md={12} style={{
              backgroundColor: "#cc6699",
              height: "100px",
              color: "white",
            }}>
              Connect with local people and find insider travel tips
          </Col>
          </Row>
          <Row>
            <Col md={12} className={'text-center'} style={{
              height: "50px",
            }}>
              <LinkContainer to="/">
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
          <Row>
            <Col md={12}>
              <Component {...matchProps} />
            </Col>
          </Row>
        </div>
        <footer style={{
          position: "absolute",
          bottom: 0,
          height: "60px",
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "0 15px",
        }}>
          <div className={"fluid-container"}>

            <Row className="Footer" >
              <Col md={12} className={"text-center"} style={{
                backgroundColor: "#336699",
                height: "60px",
                color: "white"
              }}>
                <p style={{
                  margin: "20px 0"
                }}>GUIDE TO ICELAND</p>
              </Col>
            </Row>
          </div>
        </footer>
      </Fragment >
    )} />
  )
};


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <DefaultLayout exact path='/' component={PopularTipsPage} />
        <DefaultLayout path={routes.verifiedLocals} component={VerifiedLocalsPage} />
        <DefaultLayout path={routes.latestTips} component={LatestTipsPage} />
        <DefaultLayout path={routes.newestLocals} component={NewestLocalsPage} />
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
