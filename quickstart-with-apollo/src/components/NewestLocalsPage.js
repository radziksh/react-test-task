import React, { Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Col, Row } from 'react-bootstrap'
import TipComponent from './PlaceComponent'

class NewestLocalsPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allLocalsQuery.refetch()
    }
  }

  render() {
    if (this.props.allLocalsQuery.loading) {
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
        {this.props.allLocalsQuery.allLocals && this.props.allLocalsQuery.allLocals.map(post => (
          <TipComponent
            key={post.id}
            imageUrl={post.imageUrl}
            description={post.name}
            refresh={() => this.props.allLocalsQuery.refetch()}
          />
        ))}
        {this.props.children}
      </Fragment>
    )
  }
}

const ALL_LOCALS_QUERY = gql`
  query allLocalsQuery {
    allLocals(orderBy: createdAt_DESC, filter:{
      verified: false
    }) {
      id
      imageUrl
      name
    }
  }
`

const NewestLocalsPageWithQuery = graphql(ALL_LOCALS_QUERY, {
  name: 'allLocalsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewestLocalsPage)

export default NewestLocalsPageWithQuery
