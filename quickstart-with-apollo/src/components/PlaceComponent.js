import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default class PlaceComponent extends React.Component {
  render() {
    return (
      <Image src={this.props.imageUrl} alt='place' style={{ width: '150px', height: '150px' }} />
    )
  }

}