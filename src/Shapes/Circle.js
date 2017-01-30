// Circle / ellipse

// Properties List
  // Name           Type        Default          Description
  // -----------------------------------------------------------------------------------
  // isShown        bool        true             If false will hide shape
  // radius         number      50               Radius of circle
  // radiusX        number      50               Radius of ellipse in X direction
  // radiusY        number      50               Radius of ellipse in Y direction
  // x              number      0                Transform position on the x axis
  // y              number      0                Transform position on the y axis
  // fill           string      'pink'           Fill color for circle
  // stroke         string      'transparent'    Stroke color for circle border
  // strokeWidth    number      0                Stroke width in px


import React from 'react'


export default class Circle extends React.Component {

  constructor() {
    super()
    this.state = {
      style: {
        shapeContainer: {
          position: 'absolute',
          width: 100,
          height: 100,
          marginLeft: -50,
          marginTop: -50,
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
          strokeWidth: 0,
          strokeOpacity: 1,
          stroke: 'transparent'
        }
      }
    }
  }

  render() {
    let { shapeContainer, canvas, shape } = this.state.style
    let { isShown, radius, radiusX, radiusY, x, y, fill, stroke, strokeWidth } = this.props

    if ( isShown === false ) shapeContainer.opacity = '0'
    if ( radius ) {
      shape.rx = radius
      shape.ry = radius
      shape.cx = radius
      shape.cy = radius
      shapeContainer.width = radius*2
      shapeContainer.height = radius*2
      shapeContainer.marginLeft = radius*-1
      shapeContainer.marginTop = radius*-1
    }
    if ( radiusX ) {
      shape.rx = radiusX
      shape.cx = radiusX
      shapeContainer.width = radiusX*2
      shapeContainer.marginLeft = radiusX*-1
    }
    if ( radiusY ) {
      shape.ry = radiusY
      shape.cy = radiusY
      shapeContainer.height = radiusY*2
      shapeContainer.marginTop = radiusY*-1
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
    if ( fill ) {
      shape.fill = fill
    }
    if ( stroke ) {
      shape.stroke = stroke
    }
    if ( strokeWidth ) {
      shape.strokeWidth = strokeWidth
      shapeContainer.width += strokeWidth
      shapeContainer.height += strokeWidth
      shapeContainer.marginLeft -= strokeWidth*0.5
      shapeContainer.marginTop -= strokeWidth*0.5
      shape.cx += strokeWidth*0.5
      shape.cy += strokeWidth*0.5
    }

    // Suffix with px
    shape.strokeWidth += 'px'
    shapeContainer.width += 'px'
    shapeContainer.height += 'px'
    shapeContainer.marginLeft += 'px'
    shapeContainer.marginTop += 'px'

    return (
      <div style={shapeContainer}>
        <svg style={canvas}>
          <ellipse style={shape}/>
        </svg>
      </div>
    );
  }
}
