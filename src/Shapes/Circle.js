// Circle / ellipse

// Properties List
  // Name        Type        Default        Description
  // -----------------------------------------------------------------------------------
  // isShown     bool        true           If false will hide shape
  // radius      number      50             Radius of circle
  // radiusX     number      50             Radius of ellipse in X direction
  // radiusY     number      50             Radius of ellipse in Y direction
  // x           number      0              Transform position on the x axis
  // y           number      0              Transform position on the y axis

import React from 'react'


export default class Circle extends React.Component {

  constructor() {
    super()
    this.state = {
      style: {
        shapeContainer: {
          position: 'absolute',
          width: '100px',
          height: '100px',
          marginLeft: '-50px',
          marginTop: '-50px',
          opacity: '1',
          left: '50%',
          top: '50%',
          transform: ''
        },
        canvas: {
          display: 'block',
          width: '100%',
          height: '100%',
          left: '0px',
          top: '0px',
          ns: 'http://www.w3.org/2000/svg',
        },
        shape: {
          rx: 50,
          ry: 50,
          cx: 50,
          cy: 50,
          fillOpacity: 1,
          fill: 'pink',
          strokeWidth: 2,
          strokeOpacity: 1,
          stroke: 'transparent'
        }
      }
    }
  }

  render() {
    let { shapeContainer, canvas, shape } = this.state.style
    let { isShown, radius, radiusX, radiusY, x, y } = this.props

    if ( isShown === false ) shapeContainer.opacity = '0'
    if ( radius ) {
      shape.rx = radius
      shape.ry = radius
      shape.cx = radius
      shape.cy = radius
      shapeContainer.width = `${radius*2}px`
      shapeContainer.height = `${radius*2}px`
      shapeContainer.marginLeft = `-${radius}px`
      shapeContainer.marginTop = `-${radius}px`
    }
    if ( radiusX ) {
      shape.rx = radiusX
      shape.cx = radiusX
      shapeContainer.width = `${radiusX*2}px`
      shapeContainer.marginLeft = `-${radiusX}px`
    }
    if ( radiusY ) {
      shape.ry = radiusY
      shape.cy = radiusY
      shapeContainer.height = `${radiusY*2}px`
      shapeContainer.marginTop = `-${radiusY}px`
    }
    if ( x && y ) {
      y = -y
      shapeContainer.transform = `translate(${x}px, ${y}px)`
    } else if ( x ) {
      shapeContainer.transform = `translate(${x}px, 0px)`
    } else if ( y ) {
      y = -y
      shapeContainer.transform = `translate(0px, ${y}px)`
    }

    return (
      <div style={shapeContainer}>
        <svg style={canvas}>
          <ellipse style={shape}/>
        </svg>
      </div>
    );
  }
}
