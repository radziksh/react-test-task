import React, { Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Col, Row } from 'react-bootstrap'
import TipComponent from './PlaceComponent'

class PopularTipsPage extends React.Component {

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
            Loading...         
          </div>
        </div>
      )
    }

    return (
      <Fragment>
        {this.props.allTipsQuery.allTips && this.props.allTipsQuery.allTips.map(post => (
          <TipComponent
            key={post.id}
            imageUrl={post.imageUrl}
            description={post.description}
            refresh={() => this.props.allTipsQuery.refetch()}
          />
        ))}
        {this.props.children}
      </Fragment>
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

const PopularTipsPageWithQuery = graphql(ALL_TIPS_QUERY, {
  name: 'allTipsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(PopularTipsPage)

export default PopularTipsPageWithQuery
