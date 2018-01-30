import React from 'react'
import ReactDOM from 'react-dom'
import VerifiedLocalsPage from './components/VerifiedLocalsPage'
import PopularTipsPage from './components/PopularTipsPage'
import LatestTipsPage from './components/LatestTipsPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
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
        <Route path='/verified-locals' component={VerifiedLocalsPage} />
        <Route path='/latest-tips' component={LatestTipsPage} />
        <Route path='/newest-locals' component={LatestTipsPage} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
