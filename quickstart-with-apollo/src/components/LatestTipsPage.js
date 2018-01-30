import React from 'react'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import { Col, Row } from 'react-bootstrap'
import TipComponent from './PlaceComponent'

class LatestTipsPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allTipsQuery.refetch()
    }
  }

  render() {
    if (this.props.allTipsQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    return (
      <Row>
        {this.props.allTipsQuery.allTips && this.props.allTipsQuery.allTips.map(post => (
          <Col md={3}>
            <TipComponent
              key={post.id}
              imageUrl={post.imageUrl}
              refresh={() => this.props.allTipsQuery.refetch()}
            />
          </Col>
        ))}
        {this.props.children}
      </Row>
    )
  }
}

const ALL_TIPS_QUERY = gql`
  query allTipsQuery {
    allTips(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`

const LatestTipsPageWithQuery = graphql(ALL_TIPS_QUERY, {
  name: 'allTipsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(LatestTipsPage)

export default LatestTipsPageWithQuery