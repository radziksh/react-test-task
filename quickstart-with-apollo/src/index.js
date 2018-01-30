import React from 'react'
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
import 'tachyons'
import './index.css'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjd1svpqr08dh0190jx2hzvmu' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={MainPage} />
        <Route path={routes.verifiedLocals} component={VerifiedLocalsPage} />
        <Route path={routes.latestTips} component={LatestTipsPage} />
        <Route path={routes.newestLocals} component={NewestLocalsPage} />
        <Route path={routes.popularTips} component={PopularTipsPage} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
