import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Row, Col } from 'react-bootstrap'

/* flexbox and css grids are better but in the test task asked bootstrap */

export default class TipComponent extends React.Component {
  render() {
    return (
      /* in real application we use css modules and postCss */
      <Col key={this.props.key} className={'text-center col-xl-1'} lg={2} md={4} sm={6} xs={12} style={{
        padding: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'auto',
      }}>
        {/* in real application we use css modules and postCss */}
        <Image src={this.props.imageUrl} style={{
          minWidth: '100%',
          objectFit: 'cover',
          height: 'auto',
        }} />
        {/* in real application we use css modules and postCss */}
        <div style={{
          backgroundColor: '#cc6699',
          textAlign: 'center',
          opacity: '0.89',
          border: '4px solid white',
          position: 'absolute',
          bottom: '10%',
          width: '80%',
          right: '10%',
          left: '10%',
        }}>{this.props.description}
        </div>
      </Col>
    )
  }
}