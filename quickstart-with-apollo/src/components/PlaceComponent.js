import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Row, Col } from 'react-bootstrap'

export default class TipComponent extends React.Component {
  render() {
    return (
      <Col className={'text-center col-xl-1'} lg={2} md={4} sm={6} xs={12} style={{
        padding: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'auto',
      }}>
        <Image src={this.props.imageUrl} style={{
          minWidth: '100%',
          objectFit: 'cover',
          height: 'auto',
        }}/> 
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