import React from 'react'
import { Link } from 'react-router-dom'
import PlaceComponent from './PlaceComponent'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Col, Row } from 'react-bootstrap'

class VerifiedLocalsPage extends React.Component {

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

    let blurClass = ''
    if (this.props.location.pathname !== '/') {
      blurClass = ' blur'
    }

    return (
      <Row>
        {this.props.allTipsQuery.allTips && this.props.allTipsQuery.allTips.map(post => (
          <Col md={3}>
            <PlaceComponent
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

const VerifiedLocalsPageWithQuery = graphql(ALL_TIPS_QUERY, {
  name: 'allTipsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(VerifiedLocalsPage)

export default VerifiedLocalsPageWithQuery
